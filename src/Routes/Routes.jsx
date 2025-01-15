import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import About from '../Pages/About';

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
        path: '/about',
        element: <About />

      },
      {
        path: '/Login',
        element: <Login />

      },
      {
        path: '/Registetion',
        element: <Register />

      },


    ]

  },

]);

export default Routes;


