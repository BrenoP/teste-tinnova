import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Loader } from "../../../components/Button/Button.style";
import { ButtonContainer, Form } from "./UseForm.style";

import { userSchema, type UserSchema } from "./UseForm.Schema";
import { useUserForm } from "./UseForm.hook";
import { getUserList } from "../../../data/users";
import type { User } from "../../../types";

type UserFormProps = {
  edit?: boolean;
};

function UserForm({ edit = false }: UserFormProps) {
  const { index } = useParams<{ index: string }>();
  const userIndex = Number(index);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const { createUser, editUser, isCreating, isEditing } = useUserForm();

  const { data: users = [] } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUserList,
  });

  const userToEdit =
    edit && index !== undefined ? users[Number(index)] : null;

  useEffect(() => {
    if (edit && userToEdit) {
      reset({
        name: userToEdit.name,
        email: userToEdit.email,
        cpf: userToEdit.cpf,
        phone: userToEdit.phone,
      });
    }
  }, [edit, userToEdit, reset]);

  async function handleCreateUser(data: UserSchema) {
    try {
      await createUser(data);
      if (!edit) reset();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleEditUser(data: UserSchema) {
    try {
      await editUser({
        index: userIndex,
        data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit(edit ? handleEditUser : handleCreateUser)}>
      <Input
        placeholder="Nome completo (sem abreviações)"
        onError={!!errors.name}
        errorMessage={errors.name?.message}
        {...register("name")}
      />

      <Input
        placeholder="Email"
        type="email"
        onError={!!errors.email}
        errorMessage={errors.email?.message}
        {...register("email")}
      />

      <Input
        placeholder="CPF"
        onError={!!errors.cpf}
        errorMessage={errors.cpf?.message}
        {...register("cpf")}
      />

      <Input
        placeholder="Telefone"
        type="number"
        onError={!!errors.phone}
        errorMessage={errors.phone?.message}
        {...register("phone")}
      />

      <ButtonContainer>
        <Button disabled={false}>
          {isCreating || isEditing ? <Loader /> : edit ? "Atualizar" : "Salvar"}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

export default UserForm;
