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
import AdminHome from '../Pages/Admin/AdminHome';
import ManageUsers from '../Pages/Admin/ManageUsers';
import FavoriteBiodatas from '../Pages/Users/FavoriteBiodatas';

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
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    children:[
      {
        path: '/Dashboard',
        element:  <h1>Welcome to Dashboard</h1>,

      },
      {
        path: 'AdminHome',
        element: <PrivateRoutes><AdminHome /></PrivateRoutes>

      },
      {
        path: 'ManageUsers',
        element: <PrivateRoutes><ManageUsers /></PrivateRoutes>

      },

      //users routes
      {
        path: 'Edit',
        element: <PrivateRoutes><EditBiodata /></PrivateRoutes>

      },
      {
        path: 'myBiodata/:email',
        element: <PrivateRoutes><MyBiodata /></PrivateRoutes>

      },
      {
        path: 'favoritebiodatas/:email',
        element: <PrivateRoutes><FavoriteBiodatas /></PrivateRoutes>

      },
    ]

  },

]);

export default Routes;


