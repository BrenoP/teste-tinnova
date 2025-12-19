import type { User } from "../types";
import { getUsersFromStorage } from "./userStorage";

export async function getUserList(): Promise<User[]> {
  const storedUsers = getUsersFromStorage();

  if (storedUsers && storedUsers.length > 0) {
    return storedUsers;
  }

  const response = await fetch("https://private-9d65b3-tinnova.apiary-mock.com/users");

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  const users = await response.json();

  localStorage.setItem("@app:users", JSON.stringify(users));

  return users;
}

export async function createUser(data: User) {
  // Caso no futuro seja adicionada uma api de criaçao de usuário, o request vem aqui
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(data);
}