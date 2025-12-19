import { useQuery } from "@tanstack/react-query";
import { getUserList } from "../../data/users";
import Title from "../../components/Title/Title";
import TableUsers from "./TableUsers";

function List() {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUserList,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <Title>Lista de usuários</Title>
      {isLoading ? (
        <>Carregando...</>
      ) : (
        <TableUsers users={users} />
      )}
    </>
  );
}

export default List