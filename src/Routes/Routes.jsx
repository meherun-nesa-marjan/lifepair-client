import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import About from '../Pages/About';
import Biodatas from '../Pages/Biodatas';
import PrivateRoutes from './PrivateRoutes';
import BiodataDetails from '../Pages/BiodataDetails';
import DashboardLayout from '../Layouts/DashboardLayout';
import EditBiodata from '../Pages/Users/EditBiodata';
import MyBiodata from '../Pages/Users/MyBiodata';

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
      {
        path: 'myBiodata/:email',
        element: <PrivateRoutes><MyBiodata /></PrivateRoutes>

      },
    ]

  },

]);

export default Routes;


