import React from 'react';
import ListarBlog from './blog/ListarBlog';
import Dashboard from '../components/Dashboard'

const Articulo1 = () => {
    return (
        <>
            {Dashboard(ListarBlog)}
        </>
    );
}

export default Articulo1;
