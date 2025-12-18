import { useState, type ReactNode } from 'react';
import { UserListContext, type UserList } from './context';

type UserListProviderProps = {
  children: ReactNode;
};

export function UserListProvider({ children }: UserListProviderProps) {
  const [userList, setUserList] = useState<UserList[]>([]);

  function setList(value: UserList[]) {
    setUserList(value);
  }

  return (
    <UserListContext.Provider value={{ userList, setList }}>
      {children}
    </UserListContext.Provider>
  );
}