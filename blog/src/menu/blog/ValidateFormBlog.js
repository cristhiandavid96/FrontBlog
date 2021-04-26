const validate = values => {
    const errors = {};
    if (!values.titulo) {
        errors.titulo = 'Required';
    }
    if (!values.slug) {
        errors.slug = 'Required';
    }
    if (!values.categoria) {
        errors.categoria = 'Required';
    }
    if (!values.texto_corto) {
        errors.texto_corto = 'Required';
    }
    if (!values.texto_largo) {
        errors.texto_largo = 'Required';
    }

    return errors;
};
export default validate

