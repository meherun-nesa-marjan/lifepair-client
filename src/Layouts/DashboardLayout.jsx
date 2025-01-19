import UseAdmin from '../Hooks/UseAdmin';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import UsersDashboard from '../Pages/Users/UsersDashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [isAdmin ] = UseAdmin();
    return (
        <div className='flex space-x-10'>
           <div className="">
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
           <div className="w-2/3">
           <div className="">
           
           </div>
           <Outlet />
           </div>
            
        </div>
    );
};

export default DashboardLayout;