import { React, useState } from 'react';
import validate from './ValidateFormUser';
import { useFormik } from 'formik';
import { HttpRequest } from '../helpers/HttpRequest';
const UserForm = () => {
    const [message, setMessage] = useState(null);
    const registro = (values) => {
        HttpRequest('http://localhost/api/users', values, 'POST').then((response) => {
            let res = JSON.parse(JSON.stringify(response))
            setMessage(res?.message)
        })
    }
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            password: '',
            telefono: '',
        },
        validate,
        onSubmit: values => {
            registro(values)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            {(message) &&
                <div className="alert alert-success" role="alert">
                    {message.toString()}
                </div>}

            <div className="form-group">
                <label >Nombre</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.nombre}
                />
                {formik.errors.nombre ? <div>{formik.errors.nombre}</div> : null}
            </div>
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
            <div className="form-group">
                <label htmlFor="email">Número móvil</label>
                <input
                    id="telefono"
                    name="telefono"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.telefono}
                />
                {formik.errors.telefono ? <div>{formik.errors.telefono}</div> : null}
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
}

export default UserForm;
