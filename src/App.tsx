import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import { UserListProvider } from "./contexts/UserList"

function App() {

  return (
    <UserListProvider>
      <NavBar />
      <Outlet />
    </UserListProvider>
  )
}

export default App
