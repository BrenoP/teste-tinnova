import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './global.css'
import App from './App.tsx'

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
