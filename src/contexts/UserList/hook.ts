import { useContext } from "react";
import { UserListContext } from "./context";

export function useUserList() {
  const provider = useContext(UserListContext)

  if(!provider) {
    throw new Error('useUserList precisa estar em um provider')
  }

  return provider
}