import React from 'react';
import Routes from './Routes';
const index = () => {
    // if (localStorage.getItem('jwt') !== "true") {
    //     return <Redirect to="/" />
    // }
    return (
        <Routes />
    );
}

export default index;
