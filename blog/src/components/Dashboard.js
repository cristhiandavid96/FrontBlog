import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/dashboard.scss';


const Dashboard = () => {
    return (
        <>
         <Navbar />
            <div className="flex">
                <Sidebar />
            </div>
        </>
           
    );
}

export default Dashboard;
