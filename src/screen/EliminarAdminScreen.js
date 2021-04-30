import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { EliminarAdminButton } from '../components/ElliminarAdminButtons/EliminarAdminButton'


export const EliminarAdminScreen = ({ usuario }) => {

    const [dataState, setDataState] = useState('')
    const [render, setRender] = useState(false)

    useEffect(() => {

        let mounted = true

        Axios.get('http://localhost:4000/user/')
            .then(({ data }) => {

                if (mounted) {
                    setDataState(data)
                    setRender(true)


                }
            })
            .catch((err) => {
                console.log(err)
            })

        return () => {
            mounted = false
        }

    }, [])

    return (
        <div className='eliminar-tabla container tabla-general'>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Usuarios</th>
                        <th scope="col">Eliminar</th>

                    </tr>
                </thead>
                <tbody>

                    {render &&
                        Object.values(dataState.admin).map((usuarios, index) => (
                            <tr key={usuarios.id}>
                                <td >{usuarios.usuario}</td>
                                <td className='td-eliminar'>
                                    <EliminarAdminButton id={usuarios.id} />
                                </td>
                            </tr>
                        ))



                    }

                </tbody>
            </table>

        </div>
    )
}
