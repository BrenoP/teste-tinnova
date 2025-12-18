import { useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "../../components/Input";
import { createUser } from "../../data/users";
import type { User } from "../../types";

function Register() {

  const queryClient = useQueryClient()
  const { mutateAsync: createUserFn } = useMutation({
    mutationFn: createUser,
    onSuccess(_, variables) {
      queryClient.setQueryData(['users'], (data: User[]) => {
        return [...data, {
          name: variables.name,
          email: variables.email,
          cpf: variables.cpf,
          phone: variables.phone
        }]
      })
    },
  }) 

  async function handleCreateUser() {
    try {
      await createUserFn({
        name: "aaaa",
        email: "aaa@aaa",
        cpf: "123123123",
        phone: "123123123"
      })
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
      <Input />
      <Input type="email" />
      <Input />
      <Input type="number" />
      <button onClick={handleCreateUser}>salvar</button>
    </>
  );
}

export default Register;