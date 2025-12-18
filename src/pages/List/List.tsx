import { useUserList } from "../../contexts/UserList";

function List() {

  const { userList } = useUserList();

  return (
    <> 
      <h1>List</h1>
      <h1>{userList.length}</h1>
    </>
  );
}

export default List;