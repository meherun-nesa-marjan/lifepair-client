import UseAdmin from '../Hooks/UseAdmin';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import UsersDashboard from '../Pages/Users/UsersDashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [isAdmin ] = UseAdmin();
    return (
        <div className='md:flex md:space-x-10 dark:bg-gray-900 dark:text-white'>
           <div className="md:w-72  w-0">
            {
                isAdmin ?
                <>
                 <AdminDashboard />
                </>
                :
                <>
                 <UsersDashboard />
                </>
            }
          
          
           </div>
           <div className="md:w-2/3 w-full">
           <Outlet />
           </div>
            
        </div>
    );
};

export default DashboardLayout;