import { React, useState } from 'react';
import LoginForm from './LoginForm';
import UserForm from '../users/UserForm';


const Login = () => {
    const [newrecord, setNewRecord] = useState(false);
    return (
        <div className="container">
            <center style={{ paddingTop: '50px' }}>
                <div className="card" style={{ width: '30rem' }} >
                    <div style={{ padding: '20px' }}>
                        <center><h5>Bienvenidos al Blog Konecta</h5></center>
                    </div>
                    <div style={{ width: '30rem' }}>

                        <div className="card text-center">
                            <div className="card-header">
                                <center>{(newrecord) ? 'Registro de usuarios' : 'Iniciar  sesión'} </center>
                            </div>
                            <div className="card-body">
                                {(newrecord) ? <UserForm /> : <LoginForm />}
                            </div>
                            <div className="card-footer text-muted">
                                <button type="submit" className="btn btn-primary" onClick={() => setNewRecord(!newrecord)}>
                                    {(newrecord) ? 'Iniciar  sesión' : 'Registrate'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div >
    );
}

export default Login;
