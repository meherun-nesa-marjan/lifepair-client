import React from 'react';
import UsersDashboard from '../Pages/Users/UsersDashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <UsersDashboard />
            <Outlet />
            
        </div>
    );
};

export default DashboardLayout;