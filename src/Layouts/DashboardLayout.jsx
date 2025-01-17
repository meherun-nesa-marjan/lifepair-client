import React from 'react';
import UsersDashboard from '../Pages/Users/UsersDashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex space-x-10'>
           <div className="">
           <UsersDashboard />
           </div>
           <div className="w-2/3">
           <Outlet />
           </div>
            
        </div>
    );
};

export default DashboardLayout;