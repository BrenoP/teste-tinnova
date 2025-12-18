import { useUserList } from "../../contexts/UserList";

function List() {

  const { userList } = useUserList();

  return (
    <> 
      <h1>List</h1>
      <ul>
        {userList.map(user => <li>{user.name}</li>)}
      </ul>
    </>
  );
}

export default List;