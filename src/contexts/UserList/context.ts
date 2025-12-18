import { createContext } from 'react';
import type { User } from '../../types';

export type UserListContextData = {
  userList: User[];
  setList: (value: User[]) => void;
};

export const UserListContext = createContext<UserListContextData>(
  {} as UserListContextData
);