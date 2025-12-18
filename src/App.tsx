import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useUserList } from "./contexts/UserList"
import { useQuery } from "@tanstack/react-query"
import { getUserList } from "./data/users"
import { useEffect } from "react"

function App() {

  const { setList } = useUserList()

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUserList
  })

  useEffect(() => {
    if(users) {
      setList(users)
    }  
  }, [users, setList])

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
