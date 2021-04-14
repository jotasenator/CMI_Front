import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Axios from 'axios'

import { EditButton } from './TableButtons/EditButton'
import { DeleteButton } from './TableButtons/DeleteButton'




export const TableScreen = ({ departamento }) => {


    const [dataState, setDataState] = useState({})

    useEffect(() => {

        let mounted = true


        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const dataFiltrada = data.eventos.filter(x =>
                    x.departamento === departamento

                )
                if (mounted) {

                    setDataState(dataFiltrada)
                }


            })
            .catch((e) => {

            })


        return () => mounted = false


    }, [dataState, departamento])







    return (
        <>
            {
                dataState.length !== 1
                    ?
                    <p className='registro' style={{ textAlign: 'end' }}>{dataState.length} registros</p>
                    :
                    <p className='registro' style={{ textAlign: 'end' }}>{dataState.length} registro</p>

            }


            <div className='tabla-general'>


                <table
                    className="table table-striped table-bordered table-hover "
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                >

                    <thead >

                        <tr  >
                            <th scope="col">No</th>
                            {/* <th scope="col">Departamento</th> */}
                            <th scope="col">Responsable</th>
                            <th scope="col">NoSello</th>
                            <th scope="col">IdentificadorEquipo</th>
                            <th scope="col">PlacaMadreMarca</th>
                            <th scope="col">PlacaMadreModelo</th>
                            <th scope="col">PlacaMadreNS</th>
                            <th scope="col">PlacaMadreObservaciones</th>
                            <th scope="col">DiscoDuroMarca</th>
                            <th scope="col">DiscoDuroModelo</th>
                            <th scope="col">DiscoDuroNS</th>
                            <th scope="col">DiscoDuroObservaciones</th>
                            <th scope="col">MemoriaRAMMarca</th>
                            <th scope="col">MemoriaRAMModelo</th>
                            <th scope="col">MemoriaRAMNS</th>
                            <th scope="col">MemoriaRAMObservaciones</th>
                            <th scope="col">MicroProcesadorMarca</th>
                            <th scope="col">MicroProcesadorModelo</th>
                            <th scope="col">MicroProcesadorNS</th>
                            <th scope="col">MicroProcesadorObservaciones</th>
                            <th scope="col">FuenteInternaMarca</th>
                            <th scope="col">FuenteInternaModelo</th>
                            <th scope="col">FuenteInternaNS</th>
                            <th scope="col">FuenteInternaObservaciones</th>
                            <th scope="col">LectorCDDVDMarca</th>
                            <th scope="col">LectorCDDVDModelo</th>
                            <th scope="col">LectorCDDVDNS</th>
                            <th scope="col">LectorCDDVDObservaciones</th>
                            <th scope="col">ComputadoraNI</th>
                            <th scope="col">MonitorMarca</th>
                            <th scope="col">MonitorModelo</th>
                            <th scope="col">MonitorNS</th>
                            <th scope="col">MonitorObservaciones</th>
                            <th scope="col">MonitorNI</th>
                            <th scope="col">TecladoMarca</th>
                            <th scope="col">TecladoModelo</th>
                            <th scope="col">TecladoNS</th>
                            <th scope="col">TecladoObservaciones</th>
                            <th scope="col">TecladoNI</th>
                            <th scope="col">MouseMarca</th>
                            <th scope="col">MouseModelo</th>
                            <th scope="col">MouseNS</th>
                            <th scope="col">MouseObservaciones</th>
                            <th scope="col">MouseNI</th>
                            <th scope="col">BocinasMarca</th>
                            <th scope="col">BocinasModelo</th>
                            <th scope="col">BocinasNS</th>
                            <th scope="col">BocinasObservaciones</th>
                            <th scope="col">BocinasNI</th>
                            <th scope="col">ImpresoraMarca</th>
                            <th scope="col">ImpresoraModelo</th>
                            <th scope="col">ImpresoraNS</th>
                            <th scope="col">ImpresoraObservaciones</th>
                            <th scope="col">ImpresoraNI</th>
                            <th scope="col">UpsMarca</th>
                            <th scope="col">UpsModelo</th>
                            <th scope="col">UpsNS</th>
                            <th scope="col">UpsObservaciones</th>
                            <th scope="col">UpsNI</th>


                        </tr>
                    </thead>

                    <tbody>
                        {

                            Object.entries(dataState).map(([keyNoUsada, informacion], index) => (

                                <tr key={informacion.id} >
                                    <th scope='row'>{index + 1}</th>

                                    {/* <td >{informacion.departamento}</td> */}
                                    <td>{informacion.responsable}</td>
                                    <td>{informacion.noSello}</td>
                                    <td>{informacion.identificadorEquipo}</td>
                                    <td>{informacion.placaMadreMarca}</td>
                                    <td>{informacion.placaMadreModelo}</td>
                                    <td>{informacion.placaMadreNS}</td>
                                    <td>{informacion.placaMadreObservaciones}</td>
                                    <td>{informacion.discoDuroMarca}</td>
                                    <td>{informacion.discoDuroModelo}</td>
                                    <td>{informacion.discoDuroNS}</td>
                                    <td >{informacion.discoDuroObservaciones}</td>
                                    <td>{informacion.memoriaRAMMarca}</td>
                                    <td>{informacion.memoriaRAMModelo}</td>
                                    <td>{informacion.memoriaRAMNS}</td>
                                    <td>{informacion.memoriaRAMObservaciones}</td>
                                    <td>{informacion.microProcesadorMarca}</td>
                                    <td>{informacion.microProcesadorModelo}</td>
                                    <td>{informacion.microProcesadorNS}</td>
                                    <td>{informacion.microProcesadorObservaciones}</td>
                                    <td>{informacion.fuenteInternaMarca}</td>
                                    <td>{informacion.fuenteInternaModelo}</td>
                                    <td>{informacion.fuenteInternaNS}</td>
                                    <td>{informacion.fuenteInternaObservaciones}</td>
                                    <td>{informacion.lectorCDDVDMarca}</td>
                                    <td>{informacion.lectorCDDVDModelo}</td>
                                    <td>{informacion.lectorCDDVDNS}</td>
                                    <td>{informacion.lectorCDDVDObservaciones}</td>
                                    <td>{informacion.computadoraNI}</td>
                                    <td>{informacion.monitorMarca}</td>
                                    <td>{informacion.monitorModelo}</td>
                                    <td>{informacion.monitorNS}</td>
                                    <td>{informacion.monitorObservaciones}</td>
                                    <td>{informacion.monitorNI}</td>
                                    <td>{informacion.tecladoMarca}</td>
                                    <td>{informacion.tecladoModelo}</td>
                                    <td>{informacion.tecladoNS}</td>
                                    <td>{informacion.tecladoObservaciones}</td>
                                    <td>{informacion.tecladoNI}</td>
                                    <td>{informacion.mouseMarca}</td>
                                    <td>{informacion.mouseModelo}</td>
                                    <td>{informacion.mouseNS}</td>
                                    <td>{informacion.mouseObservaciones}</td>
                                    <td>{informacion.mouseNI}</td>
                                    <td>{informacion.bocinasMarca}</td>
                                    <td>{informacion.bocinasModelo}</td>
                                    <td>{informacion.bocinasNS}</td>
                                    <td>{informacion.bocinasObservaciones}</td>
                                    <td>{informacion.bocinasNI}</td>
                                    <td>{informacion.impresoraMarca}</td>
                                    <td>{informacion.impresoraModelo}</td>
                                    <td>{informacion.impresoraNS}</td>
                                    <td>{informacion.impresoraObservaciones}</td>
                                    <td>{informacion.impresoraNI}</td>
                                    <td>{informacion.upsMarca}</td>
                                    <td>{informacion.upsModelo}</td>
                                    <td>{informacion.upsNS}</td>
                                    <td>{informacion.upsObservaciones}</td>
                                    <td>{informacion.upsNI}</td>

                                    <td className='butonEditDelete'>
                                        <EditButton id={informacion.id} />
                                        <DeleteButton id={informacion.id} />



                                    </td>


                                </tr>

                            )
                            )
                        }




                    </tbody>




                </table>

            </div>
        </>
    )
}
