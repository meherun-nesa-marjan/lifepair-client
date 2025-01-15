import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children:[
        {
            path:'/',
            element : <Home />
        }
      ]

    },
  ]);

export default Routes;


