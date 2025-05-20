import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Loading from '../Components/Loading';

const MainLayout = () => {

    const { loading } = use(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <header className='sticky top-0 z-50  '>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;