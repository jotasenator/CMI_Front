import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'



export const TableScreen = () => {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Placa madre</th>
                        <th scope="col">Impresora</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                            <button className='btn btn-outline-primary mr-1'>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button className='btn btn-outline-danger '>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>

                        </td>

                    </tr>

                </tbody>




            </table>

        </div>
    )
}
