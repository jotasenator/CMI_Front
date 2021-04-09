/* eslint-disable no-unused-vars */
import React from 'react'

import { useForm } from '../components/hooks/useForm'

import '../../src/css.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Axios from 'axios'

import Swal from 'sweetalert2'

import { variables } from '../helpers/FormScreen/variables'





export const FormScreen = () => {

    const [formValues, handleInputchange] = useForm({
        departamento: '',
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
        departamento,
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




    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {

                data.eventos.find(x =>
                    x.departamento === departamento
                    &&
                    x.computadoraNI === computadoraNI
                    &&
                    x.noSello === noSello

                )
                    ?
                    Swal.fire(
                        'Error   ',
                        'Esta computadora está inventariada',
                        'error'
                    )
                    :
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
                                'Falta información por ser recolectada',
                                'error'
                            )

                        })

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
                            <option value="comision">Comisión de Cuadros</option>
                        </select>
                    </div>
                    {/*renderizado opcional para tener un cambio de color en los inputs */}
                    {variables.map((variable, index) =>
                        <div className="form-group">

                            {
                                // eslint-disable-next-line no-eval
                                (eval(variable) === '') ?
                                    (<input

                                        className='form-control alert alert-danger'
                                        key={index}
                                        type="text"
                                        name={variable}
                                        placeholder={variable}
                                        onChange={handleInputchange}
                                        title={variable}
                                        // eslint-disable-next-line no-eval
                                        value={eval(variable)}

                                    />) :
                                    (
                                        <input

                                            className='form-control alert alert-success '
                                            key={index}
                                            type="text"
                                            name={variable}
                                            placeholder={variable}
                                            onChange={handleInputchange}
                                            // eslint-disable-next-line no-eval
                                            value={eval(variable)}
                                            title={variable}

                                        />

                                    )

                            }

                        </div>

                    )}


                    {/* Bton de guardar la informacion en la base de datos */}
                    <div
                        className="form-group"

                    >
                        <input
                            type="submit"
                            className="btnSubmit btn-success "
                            value="Guardar " />
                    </div>


                </form>
            </div>
            <div className='container p-5'>


            </div>


        </>
    )
}

