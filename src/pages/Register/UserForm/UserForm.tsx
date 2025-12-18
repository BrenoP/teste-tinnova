import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../../components/Input";
import { useCreateUser } from "./UseForm.hook";
import { userSchema, type UserSchema } from "./UseForm.Schema";
import { ButtonContainer, Form } from "./UseForm.style";
import Title from "../../../components/Title/Title";
import Button from "../../../components/Button";
import { Loader } from "../../../components/Button/Button.style";
import { useEffect } from "react";

function UserForm() {
  const { register, handleSubmit, formState } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });
  const { errors } = formState;

  const { createUser, isPending } = useCreateUser();

  useEffect(() => {
    console.log(errors)
  }, [errors])

  async function handleCreateUser(data: UserSchema) {
    try {
      await createUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Title>Registro de usuários</Title>
      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <Input 
          placeholder="Nome completo (sem abreviações)" 
          onError={!!errors?.name}
          errorMessage={errors.name?.message}
          {...register("name")} 
        />
        <Input 
          placeholder="Email" 
          type="email" 
          onError={!!errors?.email}
          errorMessage={errors.email?.message}
          {...register("email")} 
        />
        <Input 
          placeholder="CPF" 
          onError={!!errors?.cpf}
          errorMessage={errors.cpf?.message}
          {...register("cpf")} 
        />
        <Input 
          placeholder="Telefone" 
          type="number" 
          onError={!!errors?.phone}
          errorMessage={errors.phone?.message}
          {...register("phone")} 
        />
        <ButtonContainer>
          <Button disabled={false}>
            {isPending ? <Loader /> : "Salvar"}
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
}

export default UserForm;
