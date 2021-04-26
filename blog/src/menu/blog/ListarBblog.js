import { HttpRequest } from '../../helpers/HttpRequest';
import { React, useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListarBblog = () => {
    const [data, setData] = useState(null);
    const loadData = async () => {
        await HttpRequest('http://localhost/api/blogs', null, 'GET').then((response) => {
            let respuesta = JSON.parse(JSON.stringify(response))
            setData(respuesta?.res)
            // console.log('res',respuesta?.res)
        })
    }

    useEffect(() => {
        let isMounted = true

        if (isMounted) {
            loadData()
        }
        return () => {
            isMounted = false
        };
    }, []);

    const Print = () => {
        return (<>
            {(data) && data.map((record, id) => (
                <tr key={id}>
                    <td>{record.categoria}</td>
                    <td>{record.titulo}</td>
                    <td>{record.texto_corto}</td>
                    <td>{record.texto_largo}</td>
                    <td><span edge="start" color="inherit"  >{<DeleteIcon />}</span></td>
                </tr>
            ))}
        </>
        )
    }
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">categoria</th>
                        <th scope="col">titulo</th>
                        <th scope="col">texto Corto</th>
                        <th scope="col">texto Largo</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Print()
                    }
                </tbody>
            </table>
        </>
    );
}

export default ListarBblog;
