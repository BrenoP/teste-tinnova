import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../../data/users";
import type { User } from "../../../types";
import { saveUsersToStorage } from "../../../data/userStorage";
import { showToast } from "../../../components/Toast";

type CreateUserInput = Omit<User, 'id'>;

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: createUser,
    onSuccess(_, variables) {
      queryClient.setQueryData<User[]>(['users'], (data) => {
        if (!data) return []

        const updated = [...data,
          {
            name: variables.name,
            email: variables.email,
            cpf: variables.cpf,
            phone: variables.phone,
          }
        ]

        saveUsersToStorage(updated)

        return updated
      });

      showToast({
        type: "success",
        message: "Usuário cadastrado com sucesso!",
      });
    },
  });

  async function createUserAsync(data: CreateUserInput) {
    return mutateAsync(data)
  }

  return {
    createUser: createUserAsync,
    isPending,
    isError,
  };
}
