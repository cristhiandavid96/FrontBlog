import { React, useState } from 'react';
import { useFormik } from 'formik';
import { HttpRequest } from '../helpers/HttpRequest';
import { Redirect } from 'react-router-dom'

const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
}
const LoginForm = () => {
    const [login, setLogin] = useState(false);
    const [message, setMessage] = useState(null);
    function sigIn(values) {

        HttpRequest('http://localhost/api/login', values, 'POST').then((response) => {
            let data = JSON.parse(JSON.stringify(response));
            if (data?.res === true) {
                localStorage.setItem('jwt', JSON.stringify(response))
                setLogin(true)
            }else{
                setMessage(data?.message)
            }

        })

    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            sigIn(values)
        },
    })

    if (login) {
        return (
            <Redirect to="/inicio" />
        )
    }
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
            {(message) &&
                <div className="alert alert-danger" role="alert">
                    {message.toString()}
                </div>}
                <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Clave</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Iniciar  sesión</button>
            </form>
        </>
    );
}

export default LoginForm;
