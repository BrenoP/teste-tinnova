import type { User } from "../types";

const STORAGE_KEY = "@app:users";

export function getUsersFromStorage(): User[] | undefined {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : undefined;
}

export function saveUsersToStorage(users: User[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}