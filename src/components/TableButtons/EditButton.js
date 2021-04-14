import React from 'react'

import Swal from 'sweetalert2'

import Axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export const EditButton = ({ id }) => {

    const handleEdit = () => {

        Swal.fire({
            title: 'Atención',
            text: "Vas a modificar la información",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.put(`http://localhost:4000/api/${id}`)
                    .then(() => {
                        Swal.fire(
                            '',
                            'La información ha sido modificada',
                            'success'
                        )

                    })
                    .catch(() => {
                        Swal.fire(
                            'Error   ',
                            'Contacte con el administrador',
                            'error'
                        )

                    })


            }
        }).catch((err) => {
            console.log(err)

        })
    }



    return (
        <div>
            <button
                className='btn btn-outline-primary mr-1'
                type='submit'
                onClick={handleEdit}

            >
                <FontAwesomeIcon icon={faEdit} />
            </button>

        </div>
    )
}
