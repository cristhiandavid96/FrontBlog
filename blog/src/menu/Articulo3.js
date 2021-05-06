import React from 'react';
import CrearBlog from './blog/CrearBlog';
import Dashboard from '../components/Dashboard'

const Articulo3 = () => {
    return (
        <>
            {Dashboard(CrearBlog)}
        </>
    );
}

export default Articulo3;
