import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Sidebar>
                <Outlet></Outlet>
            </Sidebar>
        </div>
    );
};

export default Layout;