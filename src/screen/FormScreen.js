import React from 'react'

import { useForm } from '../components/hooks/useForm'

import './login.css'
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

    const { responsable,
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
        console.log(formValues.length)


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
                    <div className="form-group">
                        <input
                            type="text"
                            name='responsable'
                            className="form-control"
                            placeholder="Responsable de la PC"
                            onChange={handleInputchange}
                            value={responsable}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name='noSello'
                            className="form-control"
                            placeholder="No de Sello"
                            onChange={handleInputchange}
                            value={noSello}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='identificadorEquipo'
                            className="form-control"
                            placeholder=" Indentificador del Equipo"
                            onChange={handleInputchange}
                            value={identificadorEquipo}
                        />
                    </div>
                    {/* Placa Madre */}

                    <div className="form-group">
                        <input
                            type="text"
                            name='placaMadreMarca'
                            className="form-control"
                            placeholder=" Marca de la Placa Madre"
                            onChange={handleInputchange}
                            value={placaMadreMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='placaMadreModelo'
                            className="form-control"
                            placeholder=" Modelo de la Placa Madre"
                            onChange={handleInputchange}
                            value={placaMadreModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='placaMadreNS'
                            className="form-control"
                            placeholder=" N/S de la Placa Madre"
                            onChange={handleInputchange}
                            value={placaMadreNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='placaMadreObservaciones'
                            className="form-control"
                            placeholder=" Observaciones de la Placa Madre"
                            onChange={handleInputchange}
                            value={placaMadreObservaciones}
                        />

                    </div>

                    {/* Disco Duro */}

                    <div className="form-group">
                        <input
                            type="text"
                            name='discoDuroMarca'
                            className="form-control"
                            placeholder=" Marca del Disco Duro"
                            onChange={handleInputchange}
                            value={discoDuroMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='discoDuroModelo'
                            className="form-control"
                            placeholder=" Modelo del Disco Duro"
                            onChange={handleInputchange}
                            value={discoDuroModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='discoDuroNS'
                            className="form-control"
                            placeholder=" N/S del Disco Duro"
                            onChange={handleInputchange}
                            value={discoDuroNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='discoDuroObservaciones'
                            className="form-control"
                            placeholder=" Observaciones del Disco Duro"
                            onChange={handleInputchange}
                            value={discoDuroObservaciones}
                        />

                    </div>

                    {/* RAM */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='memoriaRamMarca'
                            className="form-control"
                            placeholder=" Marca de la Memoria RAM"
                            onChange={handleInputchange}
                            value={memoriaRAMMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='memoriaRamModelo'
                            className="form-control"
                            placeholder=" Modelo de la Memoria RAM"
                            onChange={handleInputchange}
                            value={memoriaRAMModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='memoriaRAMNS'
                            className="form-control"
                            placeholder=" N/S de la Memoria RAM"
                            onChange={handleInputchange}
                            value={memoriaRAMNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='memoriaRAMObservaciones'
                            className="form-control"
                            placeholder=" Observaciones de la Memoria RAM"
                            onChange={handleInputchange}
                            value={memoriaRAMObservaciones}
                        />

                    </div>

                    {/* Microprocesador */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='microProcesadorMarca'
                            className="form-control"
                            placeholder=" Marca del MicroProcesador"
                            onChange={handleInputchange}
                            value={microProcesadorMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='microProcesadorModelo'
                            className="form-control"
                            placeholder=" Modelo del MicroProcesador"
                            onChange={handleInputchange}
                            value={microProcesadorModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='microProcesadorNS'
                            className="form-control"
                            placeholder=" N/S del MicroProcesador"
                            onChange={handleInputchange}
                            value={microProcesadorNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='microProcesadorObservaciones'
                            className="form-control"
                            placeholder=" Observaciones del MicroProcesador"
                            onChange={handleInputchange}
                            value={microProcesadorObservaciones}
                        />

                    </div>

                    {/* Fuente Interna */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='fuenteInternaMarca'
                            className="form-control"
                            placeholder=" Marca de la Fuente"
                            onChange={handleInputchange}
                            value={fuenteInternaMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='fuenteInternaModelo'
                            className="form-control"
                            placeholder=" Modelo de la Fuente"
                            onChange={handleInputchange}
                            value={fuenteInternaModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='fuenteInternaNS'
                            className="form-control"
                            placeholder=" N/S de la Fuente"
                            onChange={handleInputchange}
                            value={fuenteInternaNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='fuenteInternaObservaciones'
                            className="form-control"
                            placeholder=" Observaciones de la Fuente"
                            onChange={handleInputchange}
                            value={fuenteInternaObservaciones}
                        />

                    </div>

                    {/* Lector CD DVD */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='lectorCDDVDMarca'
                            className="form-control"
                            placeholder=" Marca del Lector CD/DVD"
                            onChange={handleInputchange}
                            value={lectorCDDVDMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='lectorCDDVDModelo'
                            className="form-control"
                            placeholder=" Modelo del Lector CD/DVD"
                            onChange={handleInputchange}
                            value={lectorCDDVDModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='lectorCDDVDNS'
                            className="form-control"
                            placeholder=" N/S del Lector CD/DVD"
                            onChange={handleInputchange}
                            value={lectorCDDVDNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='lectorCDDVDObservaciones'
                            className="form-control"
                            placeholder=" Observaciones del Lector CD/DVD"
                            onChange={handleInputchange}
                            value={lectorCDDVDObservaciones}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='computadoraNI'
                            className="form-control"
                            placeholder=" Número de Inventario de la CP"
                            onChange={handleInputchange}
                            value={computadoraNI}
                        />

                    </div>

                    {/* Monitor */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='monitorMarca'
                            className="form-control"
                            placeholder=" Marca del Monitor"
                            onChange={handleInputchange}
                            value={monitorMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='monitorModelo'
                            className="form-control"
                            placeholder=" Modelo del Monitor"
                            onChange={handleInputchange}
                            value={monitorModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='monitorNS'
                            className="form-control"
                            placeholder=" N/S del Monitor"
                            onChange={handleInputchange}
                            value={monitorNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='monitorObservaciones'
                            className="form-control"
                            placeholder=" Observaciones del Monitor"
                            onChange={handleInputchange}
                            value={monitorObservaciones}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='monitorNI'
                            className="form-control"
                            placeholder=" Número de Inventario del Monitor"
                            onChange={handleInputchange}
                            value={monitorNI}
                        />

                    </div>

                    {/* Teclado */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='tecladoMarca'
                            className="form-control"
                            placeholder=" Marca del Teclado"
                            onChange={handleInputchange}
                            value={tecladoMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='tecladoModelo'
                            className="form-control"
                            placeholder=" Modelo del Teclado"
                            onChange={handleInputchange}
                            value={tecladoModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='tecladoNS'
                            className="form-control"
                            placeholder=" N/S del Teclado"
                            onChange={handleInputchange}
                            value={tecladoNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='tecladoObservaciones'
                            className="form-control"
                            placeholder=" Observaciones del Teclado"
                            onChange={handleInputchange}
                            value={tecladoObservaciones}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='tecladoNI'
                            className="form-control"
                            placeholder=" Número de Inventario del teclado"
                            onChange={handleInputchange}
                            value={tecladoNI}
                        />

                    </div>

                    {/* Mouse */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='mouseMarca'
                            className="form-control"
                            placeholder=" Marca del Mouse"
                            onChange={handleInputchange}
                            value={mouseMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='mouseModelo'
                            className="form-control"
                            placeholder=" Modelo del Mouse"
                            onChange={handleInputchange}
                            value={mouseModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='mouseNS'
                            className="form-control"
                            placeholder=" N/S del Mouse"
                            onChange={handleInputchange}
                            value={mouseNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='mouseObservaciones'
                            className="form-control"
                            placeholder=" Observaciones del Mouse"
                            onChange={handleInputchange}
                            value={mouseObservaciones}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='mouseNI'
                            className="form-control"
                            placeholder=" Número de Inventario del Mouse"
                            onChange={handleInputchange}
                            value={mouseNI}
                        />

                    </div>

                    {/* UPS */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='upsMarca'
                            className="form-control"
                            placeholder=" Marca de la UPS"
                            onChange={handleInputchange}
                            value={upsMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='upsModelo'
                            className="form-control"
                            placeholder=" Modelo de la UPS"
                            onChange={handleInputchange}
                            value={upsModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='upsNS'
                            className="form-control"
                            placeholder=" N/S de la UPS"
                            onChange={handleInputchange}
                            value={upsNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='upsObservaciones'
                            className="form-control"
                            placeholder=" Observaciones de la UPS"
                            onChange={handleInputchange}
                            value={upsObservaciones}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='upsNI'
                            className="form-control"
                            placeholder=" Número de Inventario de la UPS"
                            onChange={handleInputchange}
                            value={upsNI}
                        />

                    </div>

                    {/* Impresora */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='impresoraMarca'
                            className="form-control"
                            placeholder=" Marca de la Impresora"
                            onChange={handleInputchange}
                            value={impresoraMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='impresoraModelo'
                            className="form-control"
                            placeholder=" Modelo de la Impresora"
                            onChange={handleInputchange}
                            value={impresoraModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='impresoraNS'
                            className="form-control"
                            placeholder=" N/S de la Impresora"
                            onChange={handleInputchange}
                            value={impresoraNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='impresoraObservaciones'
                            className="form-control"
                            placeholder=" Observaciones de la Impresora"
                            onChange={handleInputchange}
                            value={impresoraObservaciones}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='impresoraNI'
                            className="form-control"
                            placeholder=" Número de Inventario de la Impresora"
                            onChange={handleInputchange}
                            value={impresoraNI}
                        />

                    </div>

                    {/* speakers */}
                    <div className="form-group">
                        <input
                            type="text"
                            name='bocinasMarca'
                            className="form-control"
                            placeholder=" Marca de las Bocinas"
                            onChange={handleInputchange}
                            value={bocinasMarca}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='bocinasModelo'
                            className="form-control"
                            placeholder=" Modelo de las Bocinas"
                            onChange={handleInputchange}
                            value={bocinasModelo}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='bocinasNS'
                            className="form-control"
                            placeholder=" N/S de las Bocinas"
                            onChange={handleInputchange}
                            value={bocinasNS}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='bocinasObservaciones'
                            className="form-control"
                            placeholder=" Observaciones de las Bocinas"
                            onChange={handleInputchange}
                            value={bocinasObservaciones}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='bocinasNI'
                            className="form-control"
                            placeholder=" Número de Inventario de las Bocinas"
                            onChange={handleInputchange}
                            value={bocinasNI}
                        />

                    </div>



                    {/* Bton de guardar la informacion en la base de datos */}
                    <div className="form-group">
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

