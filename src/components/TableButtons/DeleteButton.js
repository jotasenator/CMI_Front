import React from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const DeleteButton = ({ id }) => {

    const handleDelete = () => {

        Swal.fire({
            title: 'Cuidado',
            text: "No es posible revertir este proceso",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar con el borrado'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`http://localhost:4000/api/${id}`)
                    .then(() => {
                        Swal.fire({

                            position: 'center',
                            icon: 'success',
                            title: 'Información eliminada con éxito',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setTimeout(() => {
                            window.location.replace('')

                        }, 1000)
                    })
                    .catch(() => {
                        Swal.fire(
                            'Error   ',
                            'Contacte con el administrador',
                            'error'
                        )
                    })
            }
        })
    }



    return (
        <div>
            <button
                type='submit'
                className='btn btn-outline-danger '
                onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>

        </div>
    )
}
