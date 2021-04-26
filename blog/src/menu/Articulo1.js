import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ListarBblog from './blog/ListarBblog';


const Articulo1 = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <ListarBblog/>
            </div>
        </>
    );
}

export default Articulo1;
