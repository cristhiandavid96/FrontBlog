import { React, useState } from 'react';
import validate from './ValidateFormBlog';
import { useFormik } from 'formik';
import { HttpRequest } from '../../helpers/HttpRequest';
const CrearBlog = () => {
    const [message, setMessage] = useState(null);
    const registro = (values) => {
        HttpRequest('http://localhost/api/blogs', values, 'POST').then((response) => {
            let res = JSON.parse(JSON.stringify(response))
            setMessage(res?.message)
        })
    }
    const formik = useFormik({
        initialValues: {
            titulo: '',
            slug: '',
            categoria: '',
            texto_corto: '',
            texto_largo: '',
        },
        validate,
        onSubmit: values => {
            registro(values)
        },
    });
    return (
        <div className="container">
            <center style={{ paddingTop: '50px' }}>
                <div className="card" style={{ width: '30rem' }} >
                    <div style={{ width: '30rem' }}>
                        <div className="card text-center">
                            <div className="card-header">
                                <center>Crear Post</center>
                            </div>
                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    {(message) &&
                                        <div className="alert alert-success" role="alert">
                                            {message.toString()}
                                        </div>}

                                    <div className="form-group">
                                        <label >Titulo</label>
                                        <input
                                            id="titulo"
                                            name="titulo"
                                            type="text"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            value={formik.values.titulo}
                                        />
                                        {formik.errors.titulo ? <div>{formik.errors.titulo}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label >Slug</label>
                                        <input
                                            id="slug"
                                            name="slug"
                                            type="text"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            value={formik.values.slug}
                                        />
                                        {formik.errors.slug ? <div>{formik.errors.slug}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label >Categoria</label>
                                        <input
                                            id="categoria"
                                            name="categoria"
                                            type="text"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            value={formik.values.categoria}
                                        />
                                        {formik.errors.categoria ? <div>{formik.errors.categoria}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label >Texto Corto</label>
                                        <input
                                            id="texto_corto"
                                            name="texto_corto"
                                            type="text"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            value={formik.values.texto_corto}
                                        />
                                        {formik.errors.texto_corto ? <div>{formik.errors.texto_corto}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label >Texto Largo</label>
                                        <input
                                            id="texto_largo"
                                            name="texto_largo"
                                            type="text"
                                            className="form-control"
                                            onChange={formik.handleChange}
                                            value={formik.values.texto_largo}
                                        />
                                        {formik.errors.texto_largo ? <div>{formik.errors.texto_largo}</div> : null}
                                    </div>

                                    <br />
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </form>
                            </div>
                            <div className="card-footer text-muted">
                                Mi Post
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div >
    );
}

export default CrearBlog;
