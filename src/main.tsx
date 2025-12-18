import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './global.css'
import App from './App.tsx'
import { UserListProvider } from './contexts/UserList/index.ts'

import Register from "./pages/Register"
import List from "./pages/List"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/list', element: <List /> },
      { path: '/register', element: <Register /> }
    ]
  }
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserListProvider>
        <RouterProvider router={router} />
      </UserListProvider>
    </QueryClientProvider>
  </StrictMode>,
)
