import type { User } from "../types";

export async function getUserList() {

  const response = await fetch("https://private-9d65b3-tinnova.apiary-mock.com/users");

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  return response.json();
}

export async function createUser(data: User) {
  // Caso no futuro seja adicionada uma api de criaçao de usuário, o request vem aqui
  await new Promise((resolve) => setTimeout(resolve, 500))
  console.log(data)
}