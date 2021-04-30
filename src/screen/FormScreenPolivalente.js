/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from '../components/hooks/useForm'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { variables } from '../helpers/variables'

import '../../src/css.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const FormScreenPolivalente = () => {

    const [formValues, handleInputchange, reset] = useForm({
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

                            Swal.fire({

                                position: 'center',
                                icon: 'success',
                                title: 'Información añadida correctamente',
                                showConfirmButton: false,
                                timer: 1500
                            })

                            // smooth scroll
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                            // setear lso valores de lso input al valor inicial pero 
                            // el select option lo asume pero no cambia la tag al default value de seleccion
                            // reset()
                            // cuando reseteo no puedo entra rla informacion de la pesetanha que se queda anterior

                            setTimeout(() => {
                                window.location.replace('')

                            }, 1000);



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

            <div className=" form col-5 mt-5 mb-5 login-form">
                <h3 className='pb-3' >Datos de interés </h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <select style={{ fontSize: '20px' }}
                            className="form-control "
                            name='departamento'
                            onChange={handleInputchange}

                        >
                            <option defaultValue hidden >Elija el área de trabajo</option>

                            {/* polivalente */}
                            <optgroup label="Sala Polivalente 19 de noviembre">
                                <option value="Colaboración">Colaboración</option>
                                <option value="Comisión de Cuadros">Comisión de Cuadros</option>
                                <option value="Dirección Polivalente">Dirección Polivalente</option>
                                <option value="Inspección">Inspección</option>
                                <option value="Organización">Organización</option>
                                <option value="Subdirección Docencia">Subdirección Docencia</option>
                                <option value="Subdirección Polivalente">Subdirección Polivalente</option>
                            </optgroup>
                        </select>
                    </div>
                    {/*renderizado opcional para tener un cambio de color en los inputs */}
                    {variables.map((variable, index) =>
                        <div key={index} className="form-group">

                            {
                                // eslint-disable-next-line no-eval
                                (eval(variable) === '') ?
                                    (<input
                                        style={{ fontSize: '20px' }}

                                        className='form-control alert alert-danger'
                                        autoComplete="off"

                                        type="text"
                                        name={variable}
                                        placeholder={variable}
                                        onChange={handleInputchange}
                                        title={variable}
                                        // eslint-disable-next-line no-eval
                                        value={eval(variable)}

                                    />

                                    ) :
                                    (
                                        <input
                                            style={{ fontSize: '20px' }}

                                            className='form-control alert alert-success '
                                            autoComplete="off"

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
                            className="btnSubmit1 p-3 btn btn-primary "
                            value="Guardar " />
                    </div>
                </form>
            </div>

        </>
    )
}

