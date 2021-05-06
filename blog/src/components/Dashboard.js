import { React, memo } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../styles/dashboard.scss'
import { getToken } from '../helpers/user'
import { Redirect } from 'react-router-dom'

const Dashboard = (InputComponent) => {


    return (
        <>
            {getToken() ?
                <>
                    <Navbar />
                    <div className="flex">
                        <Sidebar />
                        {(InputComponent) && <InputComponent />}

                    </div>
                </>

                : <Redirect to="/" />}
        </>

    );
}

export default Dashboard;
