/* eslint-disable no-unused-vars */
import React from 'react'

import { useForm } from '../components/hooks/useForm'

import '../../src/css.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


import Axios from 'axios'

import Swal from 'sweetalert2'





export const FormScreen = () => {

    const [formValues, handleInputchange] = useForm({
        responsable: '',
        noSello: '',
        identificadorEquipo: '',
        placaMadreMarca: '',
        placaMadreModelo: '',
        placaMadreNS: '',
        placaMadreObservaciones: '',
        discoDuroMarca: '',
        discoDuroModelo: '',
        discoDuroNS: '',
        discoDuroObservaciones: '',
        memoriaRAMMarca: '',
        memoriaRAMModelo: '',
        memoriaRAMNS: '',
        memoriaRAMObservaciones: '',
        microProcesadorMarca: '',
        microProcesadorModelo: '',
        microProcesadorNS: '',
        microProcesadorObservaciones: '',
        fuenteInternaMarca: '',
        fuenteInternaModelo: '',
        fuenteInternaNS: '',
        fuenteInternaObservaciones: '',
        lectorCDDVDMarca: '',
        lectorCDDVDModelo: '',
        lectorCDDVDNS: '',
        lectorCDDVDObservaciones: '',
        computadoraNI: '',
        monitorMarca: '',
        monitorModelo: '',
        monitorNS: '',
        monitorObservaciones: '',
        monitorNI: '',
        tecladoMarca: '',
        tecladoModelo: '',
        tecladoNS: '',
        tecladoObservaciones: '',
        tecladoNI: '',
        mouseMarca: '',
        mouseModelo: '',
        mouseNS: '',
        mouseObservaciones: '',
        mouseNI: '',
        bocinasMarca: '',
        bocinasModelo: '',
        bocinasNS: '',
        bocinasObservaciones: '',
        bocinasNI: '',
        impresoraMarca: '',
        impresoraModelo: '',
        impresoraNS: '',
        impresoraObservaciones: '',
        impresoraNI: '',
        upsMarca: '',
        upsModelo: '',
        upsNS: '',
        upsObservaciones: '',
        upsNI: '',



    })

    const {
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
        upsNI,

    } = formValues

    const variables = [
        'responsable',
        'noSello',
        'identificadorEquipo',
        'placaMadreMarca',
        'placaMadreModelo',
        'placaMadreNS',
        'placaMadreObservaciones',
        'discoDuroMarca',
        'discoDuroModelo',
        'discoDuroNS',
        'discoDuroObservaciones',
        'memoriaRAMMarca',
        'memoriaRAMModelo',
        'memoriaRAMNS',
        'memoriaRAMObservaciones',
        'microProcesadorMarca',
        'microProcesadorModelo',
        'microProcesadorNS',
        'microProcesadorObservaciones',
        'fuenteInternaMarca',
        'fuenteInternaModelo',
        'fuenteInternaNS',
        'fuenteInternaObservaciones',
        'lectorCDDVDMarca',
        'lectorCDDVDModelo',
        'lectorCDDVDNS',
        'lectorCDDVDObservaciones',
        'computadoraNI',
        'monitorMarca',
        'monitorModelo',
        'monitorNS',
        'monitorObservaciones',
        'monitorNI',
        'tecladoMarca',
        'tecladoModelo',
        'tecladoNS',
        'tecladoObservaciones',
        'tecladoNI',
        'mouseMarca',
        'mouseModelo',
        'mouseNS',
        'mouseObservaciones',
        'mouseNI',
        'bocinasMarca',
        'bocinasModelo',
        'bocinasNS',
        'bocinasObservaciones',
        'bocinasNI',
        'impresoraMarca',
        'impresoraModelo',
        'impresoraNS',
        'impresoraObservaciones',
        'impresoraNI',
        'upsMarca',
        'upsModelo',
        'upsNS',
        'upsObservaciones',
        'upsNI',
    ]

    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:4000/api/', formValues)
            .then(() => {
                Swal.fire(
                    'Correcto   ',
                    'Se ha añadido correctamente la información a la base de datos',
                    'success'
                )

            })
            .catch(() => {
                Swal.fire(
                    'Error   ',
                    'No se ha añadido la información a la base de datos',
                    'error'
                )

            })



    }

    return (
        <>

            <div className=" col-5  login-form">
                <h3 className='pb-3' >Datos de interés </h3>


                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <select className="form-control"
                            name='departamento'
                            onChange={handleInputchange}>
                            <option >Elija el área de trabajo</option>
                            <option value='Economia'>Economia</option>
                            <option value="Informatica">Informatica</option>
                            <option value="RRHH">RRHH</option>
                            <option value="Comedor">Comedor</option>
                            <option value="CVP">CVP</option>
                        </select>
                    </div>
                    {/*renderizado opcional para tener un cambio de color en los inputs */}
                    {variables.map((x, index) =>
                        <div className="form-group">

                            {
                                // eslint-disable-next-line no-eval
                                (eval(x) === '') ?
                                    (<input

                                        className='form-control alert alert-danger'
                                        key={index}
                                        type="text"
                                        name={x}
                                        placeholder={x}
                                        onChange={handleInputchange}
                                        // eslint-disable-next-line no-eval
                                        value={eval(x)}

                                    />) :
                                    (
                                        <input

                                            className='form-control alert alert-success '
                                            key={index}
                                            type="text"
                                            name={x}
                                            placeholder={x}
                                            onChange={handleInputchange}
                                            // eslint-disable-next-line no-eval
                                            value={eval(x)}

                                        />

                                    )

                            }

                        </div>

                    )}
                    {/* este era el codigo original de map de los inputs */}
                    {/* {variables.map((x, index) =>
                        <div className="form-group">

                            <input

                                className='form-control alert alert-danger '
                                key={index}
                                type="text"
                                name={x}
                                placeholder={x}
                                onChange={handleInputchange}
                                // eslint-disable-next-line no-eval
                                value={eval(x)}

                            />
                        </div>

                    )} */}


                    {/* Bton de guardar la informacion en la base de datos */}
                    <div
                        className="form-group"

                    >
                        <input
                            type="submit"
                            className="btnSubmit  "
                            value="Guardar " />
                    </div>


                </form>
            </div>
            <div className='container p-5'>


            </div>


        </>
    )
}

