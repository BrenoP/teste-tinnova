import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import type { User } from "../../../types";
import { saveUsersToStorage } from "../../../data/userStorage";
import { showToast } from "../../../components/Toast";
import { createUser } from "../../../data/users";

type CreateUserInput = Omit<User, "id">;

type EditUserInput = {
  index: number;
  data: CreateUserInput;
};

export function useUserForm() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess(_, variables) {
      queryClient.setQueryData<User[]>(["users"], (old) => {
        if (!old) return [];

        const updated = [...old, variables];

        saveUsersToStorage(updated);

        showToast({
          type: "success",
          message: "Usuário cadastrado com sucesso!",
        });

        return updated;
      });
    },
  });

  const editMutation = useMutation({
    mutationFn: async ({ index, data }: EditUserInput) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return { index, data };
    },
    onSuccess({ index, data }) {
      queryClient.setQueryData<User[]>(["users"], (old) => {
        if (!old) return [];

        const updated = old.map((user, i) =>
          i === index ? data : user
        );

        saveUsersToStorage(updated);

        showToast({
          type: "success",
          message: "Usuário atualizado com sucesso!",
        });

        navigate("/list")

        return updated;
      });
    },
  });

  return {
    createUser: createMutation.mutateAsync,
    editUser: editMutation.mutateAsync,

    isCreating: createMutation.isPending,
    isEditing: editMutation.isPending,
  };
}
