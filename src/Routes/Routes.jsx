import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import About from '../Pages/About';
import Biodatas from '../Pages/Biodatas';
import PrivateRoutes from './PrivateRoutes';
import BiodataDetails from '../Pages/BiodataDetails';
import Dashboard from '../Pages/AdminDashboard';
import DashboardLayout from '../Layouts/DashboardLayout';
import UsersDashboard from '../Pages/Users/UsersDashboard';
import EditBiodata from '../Pages/Users/EditBiodata';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />

      },
      {
        path: '/Biodatas',
        element: <Biodatas />,
        loader: () => fetch('http://localhost:5000/allBiodatasCount')

      },
      {
        path: '/BiodataDetails/:id',
        element: <PrivateRoutes><BiodataDetails /></PrivateRoutes>

      },
     
      {
        path: '/About',
        element: <About />

      },
      {
        path: '/Login',
        element: <Login />

      },
      {
        path: '/Registration',
        element: <Register />

      },


    ]

  },
  {
    path:'Dashboard',
    element: <DashboardLayout />,
    children:[
      {
        path: 'Edit',
        element: <PrivateRoutes><EditBiodata /></PrivateRoutes>

      },
    ]

  },

]);

export default Routes;


