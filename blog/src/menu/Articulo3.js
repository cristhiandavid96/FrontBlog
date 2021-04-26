import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CrearBlog from './blog/CrearBlog';

const Articulo3 = () => {
    return (
        <div>
           <Navbar />
            <div className="flex">
                <Sidebar />
                <CrearBlog />

            </div>
        </div>
    );
}

export default Articulo3;
