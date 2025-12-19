import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import type { User } from "../../../types";
import { saveUsersToStorage } from "../../../data/userStorage";
import { showToast } from "../../../components/Toast";

export function useTableUsers() {

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  function editUser(index: number) {
    navigate(`/edit/${index}`);
  }

  function deleteUser(index: number) {
    queryClient.setQueryData<User[]>(["users"], (old) => {
      if (!old) return [];

      const updated = old.filter((_, i) => i !== index);

      saveUsersToStorage(updated);

      showToast({
        type: "success",
        message: "Usuário removido com sucesso!",
      });

      return updated;
    });
  }

  return {
    editUser: editUser,
    deleteUser: deleteUser
  };
}
