import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={Routes} />
     </AuthProvider>
  </StrictMode>,
)
