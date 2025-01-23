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
import ApprovedPremium from '../Pages/Admin/ApprovedPremium';
import CheckoutPage from '../Pages/CheckoutPage';
import ContactRequests from '../Pages/Users/ContactRequests';
import ContactRequestApproved from '../Pages/Admin/ContactRequestApproved';
import GotMarried from '../Pages/Users/GotMarried';
import AdminSuccessStories from '../Pages/Admin/AdminSuccessStories';
import AdminRoutes from './AdminRoutes';
import Dashboad from '../Components/Dashboad';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound';

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement:<NotFound />,
    element: <MainLayouts />,
   
    children: [
      {
        path: '/',
        element: <Home />

      },
      {
        path: '/Biodatas',
        element: <Biodatas />,
        loader: () => fetch('https://life-pair-server.vercel.app/allBiodatasCount')

      },
      {
        path: '/BiodataDetails/:id',
        element: <PrivateRoutes><BiodataDetails /></PrivateRoutes>

      },

      {
        path: '/CheckoutPage/:id',
        element: <PrivateRoutes><CheckoutPage /></PrivateRoutes>

      },
     
      {
        path: '/About',
        element: <About />

      },
      {
        path: '/Contact',
        element: <Contact />

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
    errorElement:<NotFound />,
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,

    children:[
      {
        path: '/Dashboard',
        element:  <PrivateRoutes><Dashboad></Dashboad></PrivateRoutes>,

      },
      {
        path: 'AdminHome',
        element: <AdminRoutes><AdminHome /></AdminRoutes>

      },
      {
        path: 'ManageUsers',
        element: <AdminRoutes><ManageUsers /></AdminRoutes>

      },
      {
        path: 'ApprovedPremium',
        element: <AdminRoutes><ApprovedPremium /></AdminRoutes>
      },
      {
        path: 'ContactRequestApproved',
        element: <AdminRoutes><ContactRequestApproved /></AdminRoutes>
      },
      {
        path: 'AdminSuccessStories',
        element: <AdminRoutes><AdminSuccessStories /></AdminRoutes>

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
        path: 'ContactRequests/:email',
        element: <PrivateRoutes><ContactRequests /></PrivateRoutes>
      },
      {
        path: 'favoritebiodatas/:email',
        element: <PrivateRoutes><FavoriteBiodatas /></PrivateRoutes>

      },
     
      {
        path: 'GotMarried',
        element: <PrivateRoutes><GotMarried /></PrivateRoutes>

      },
    ]

  },

]);

export default Routes;


