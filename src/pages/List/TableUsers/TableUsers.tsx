import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

import type { User } from "../../../types";
import { IconsContainer, Table } from "./TableUsers.style";
import { useTableUsers } from "./TableUsers.hook";

type TableUsersProps = {
  users: User[];
};

function TableUsers({ users }: TableUsersProps) {

  const { editUser, deleteUser } = useTableUsers();

  return ( 
    <Table.Container>
      <Table.Element>
        <Table.Thead>
          <tr>
            <Table.Th>Nome</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>CPF</Table.Th>
            <Table.Th>Telefone</Table.Th>
            <Table.Th></Table.Th>
          </tr>
        </Table.Thead>

        <tbody>
          {users.map((user: User, index: number) => (
            <Table.Tr key={user.cpf}>
              <Table.Td data-cell="nome">{user.name}</Table.Td>
              <Table.Td data-cell="email">{user.email}</Table.Td>
              <Table.Td data-cell="cpf">{user.cpf}</Table.Td>
              <Table.Td data-cell="telefone">{user.phone}</Table.Td>
              <Table.Td>
                <IconsContainer>
                  <Tooltip title="Editar usuário">
                    <FaEdit onClick={() => editUser(index)} />
                  </Tooltip>
                  <Tooltip title="Deletar usuário">
                    <FaRegTrashAlt onClick={() => deleteUser(index)} />
                  </Tooltip>
                </IconsContainer>
              </Table.Td>
            </Table.Tr>
          ))}
        </tbody>
      </Table.Element>
    </Table.Container>
  );
}

export default TableUsers;