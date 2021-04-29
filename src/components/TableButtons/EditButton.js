import React from 'react'

import Swal from 'sweetalert2'

import Axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


export const EditButton = ({
    id,
    responsable,
    noSello,
    identificadorEquipo,
    placaMadreMarca,
    placaMadreModelo,
    placaMadreNS,
    placaMadreObservaciones,
    discoDuroMarca,
    discoDuroModelo,
    discoDuroNS,
    discoDuroObservaciones,
    memoriaRAMMarca,
    memoriaRAMModelo,
    memoriaRAMNS,
    memoriaRAMObservaciones,
    microProcesadorMarca,
    microProcesadorModelo,
    microProcesadorNS,
    microProcesadorObservaciones,
    fuenteInternaMarca,
    fuenteInternaModelo,
    fuenteInternaNS,
    fuenteInternaObservaciones,
    lectorCDDVDMarca,
    lectorCDDVDModelo,
    lectorCDDVDNS,
    lectorCDDVDObservaciones,
    computadoraNI,
    monitorMarca,
    monitorModelo,
    monitorNS,
    monitorObservaciones,
    monitorNI,
    tecladoMarca,
    tecladoModelo,
    tecladoNS,
    tecladoObservaciones,
    tecladoNI,
    mouseMarca,
    mouseModelo,
    mouseNS,
    mouseObservaciones,
    mouseNI,
    bocinasMarca,
    bocinasModelo,
    bocinasNS,
    bocinasObservaciones,
    bocinasNI,
    impresoraMarca,
    impresoraModelo,
    impresoraNS,
    impresoraObservaciones,
    impresoraNI,
    upsMarca,
    upsModelo,
    upsNS,
    upsObservaciones,
    upsNI

}) => {

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
                Axios.put(`http://localhost:4000/api/${id}`,

                    {
                        id,
                        responsable,
                        noSello,
                        identificadorEquipo,
                        placaMadreMarca,
                        placaMadreModelo,
                        placaMadreNS,
                        placaMadreObservaciones,
                        discoDuroMarca,
                        discoDuroModelo,
                        discoDuroNS,
                        discoDuroObservaciones,
                        memoriaRAMMarca,
                        memoriaRAMModelo,
                        memoriaRAMNS,
                        memoriaRAMObservaciones,
                        microProcesadorMarca,
                        microProcesadorModelo,
                        microProcesadorNS,
                        microProcesadorObservaciones,
                        fuenteInternaMarca,
                        fuenteInternaModelo,
                        fuenteInternaNS,
                        fuenteInternaObservaciones,
                        lectorCDDVDMarca,
                        lectorCDDVDModelo,
                        lectorCDDVDNS,
                        lectorCDDVDObservaciones,
                        computadoraNI,
                        monitorMarca,
                        monitorModelo,
                        monitorNS,
                        monitorObservaciones,
                        monitorNI,
                        tecladoMarca,
                        tecladoModelo,
                        tecladoNS,
                        tecladoObservaciones,
                        tecladoNI,
                        mouseMarca,
                        mouseModelo,
                        mouseNS,
                        mouseObservaciones,
                        mouseNI,
                        bocinasMarca,
                        bocinasModelo,
                        bocinasNS,
                        bocinasObservaciones,
                        bocinasNI,
                        impresoraMarca,
                        impresoraModelo,
                        impresoraNS,
                        impresoraObservaciones,
                        impresoraNI,
                        upsMarca,
                        upsModelo,
                        upsNS,
                        upsObservaciones,
                        upsNI

                    }
                )
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
        })
    }



    return (
        <div>
            <button

                className='btn btn-outline-primary mr-1 '
                type='submit'
                onClick={handleEdit}

            >
                <FontAwesomeIcon icon={faEdit} />
            </button>

        </div>
    )
}
