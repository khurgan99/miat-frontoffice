import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer';

const PrivateRoute = () => {
    return <div className='min-h-screen'>
        <Header />
        <Outlet />
        <Footer />
    </div>;
}

export default PrivateRoute
