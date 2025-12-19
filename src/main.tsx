import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './style/global.css';
import App from './App.tsx';

import Register from "./pages/Register";
import List from "./pages/List";
import ToastProvider from './components/Toast/ToastProvider.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'list', element: <List /> },
      { path: 'register', element: <Register /> },
      { path: 'edit/:index', element: <Register edit /> },
    ]
  }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
