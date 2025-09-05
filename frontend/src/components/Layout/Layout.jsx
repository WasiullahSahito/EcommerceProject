import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ onOpenSidebar }) => {
    return (
        <>
            <Header onOpenSidebar={onOpenSidebar} />
            <main className='bg-backgroundColor min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;