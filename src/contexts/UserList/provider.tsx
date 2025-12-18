import { useState, type ReactNode } from 'react';
import { UserListContext } from './context';
import type { User } from '../../types';

type UserListProviderProps = {
  children: ReactNode;
};

export function UserListProvider({ children }: UserListProviderProps) {
  const [userList, setUserList] = useState<User[]>([]);

  function setList(value: User[]) {
    setUserList(value);
  }

  return (
    <UserListContext.Provider value={{ userList, setList }}>
      {children}
    </UserListContext.Provider>
  );
}