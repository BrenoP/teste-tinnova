import { createContext } from 'react';

export type UserList = {
  name: string;
  cpf: string;
  phone: string;
  email: string;
};

export type UserListContextData = {
  userList: UserList[];
  setList: (value: UserList[]) => void;
};

export const UserListContext = createContext<UserListContextData>(
  {} as UserListContextData
);