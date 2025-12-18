import { useQuery } from "@tanstack/react-query";
import { getUserList } from "../../data/users";
import type { User } from "../../types";
import { getUsersFromStorage } from "../../data/userStorage";
import { Table } from "./List.style";
import Title from "../../components/Title/Title";

function List() {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUserList,
    initialData: () => {
      return getUsersFromStorage();
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <Title>Lista de usuários</Title>
      {isLoading ? (
        <>Carregando...</>
      ) : (
        // <ul>
        //   {users.map((user: User) => (
        //     <li key={user.cpf}>{user.name}</li>
        //   ))}
        // </ul>
        <Table.Container>
          <Table.Element>
            <Table.Thead>
              <tr>
                <Table.Th>Nome</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>CPF</Table.Th>
                <Table.Th>Telefone</Table.Th>
              </tr>
            </Table.Thead>

            <tbody>
              {users.map((user: User) => (
                <Table.Tr key={user.cpf}>
                  <Table.Td>{user.name}</Table.Td>
                  <Table.Td>{user.email}</Table.Td>
                  <Table.Td>{user.cpf}</Table.Td>
                  <Table.Td>{user.phone}</Table.Td>
                </Table.Tr>
              ))}
            </tbody>
          </Table.Element>
        </Table.Container>
      )}
    </>
  );
}

export default List