import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={Routes} />
    </QueryClientProvider>
     </AuthProvider>
  </StrictMode>,
)
