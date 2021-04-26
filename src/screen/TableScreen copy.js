import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Axios from 'axios'

import { EditButton } from '../components/TableButtons/EditButton'
import { DeleteButton } from '../components/TableButtons/DeleteButton'




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
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.responsable}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.noSello}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.identificadorEquipo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.placaMadreMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.placaMadreModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.placaMadreNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.placaMadreObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.discoDuroMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.discoDuroModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.discoDuroNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.discoDuroObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.memoriaRAMMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.memoriaRAMModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.memoriaRAMNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.memoriaRAMObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.microProcesadorMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.microProcesadorModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.microProcesadorNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.microProcesadorObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.fuenteInternaMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.fuenteInternaModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.fuenteInternaNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.fuenteInternaObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.lectorCDDVDMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.lectorCDDVDModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.lectorCDDVDNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.lectorCDDVDObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.computadoraNI}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorNI}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoNI}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseNI}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasNI}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraNI}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsMarca}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsModelo}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsNS}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsObservaciones}</td>
                                    <td onInput={(e) => e.target.textContent} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsNI}</td>

                                    <td className='butonEditDelete'>
                                        <EditButton
                                            id={informacion.id}
                                            responsable={informacion.responsable}
                                            noSello={informacion.noSello}
                                            identificadorEquipo={informacion.identificadorEquipo}
                                            placaMadreMarca={informacion.placaMadreMarca}
                                            placaMadreModelo={informacion.placaMadreModelo}
                                            placaMadreNS={informacion.placaMadreNS}
                                            placaMadreObservaciones={informacion.placaMadreObservaciones}
                                            discoDuroMarca={informacion.discoDuroMarca}
                                            discoDuroModelo={informacion.discoDuroModelo}
                                            discoDuroNS={informacion.discoDuroNS}
                                            discoDuroObservaciones={informacion.discoDuroObservaciones}
                                            memoriaRAMMarca={informacion.memoriaRAMMarca}
                                            memoriaRAMModelo={informacion.memoriaRAMModelo}
                                            memoriaRAMNS={informacion.memoriaRAMNS}
                                            memoriaRAMObservaciones={informacion.memoriaRAMObservaciones}
                                            microProcesadorMarca={informacion.microProcesadorMarca}
                                            microProcesadorModelo={informacion.microProcesadorModelo}
                                            microProcesadorNS={informacion.microProcesadorNS}
                                            microProcesadorObservaciones={informacion.microProcesadorObservaciones}
                                            fuenteInternaMarca={informacion.fuenteInternaMarca}
                                            fuenteInternaModelo={informacion.fuenteInternaModelo}
                                            fuenteInternaNS={informacion.fuenteInternaNS}
                                            fuenteInternaObservaciones={informacion.fuenteInternaObservaciones}
                                            lectorCDDVDMarca={informacion.lectorCDDVDMarca}
                                            lectorCDDVDModelo={informacion.lectorCDDVDModelo}
                                            lectorCDDVDNS={informacion.lectorCDDVDNS}
                                            lectorCDDVDObservaciones={informacion.lectorCDDVDObservaciones}
                                            computadoraNI={informacion.computadoraNI}
                                            monitorMarca={informacion.monitorMarca}
                                            monitorModelo={informacion.monitorModelo}
                                            monitorNS={informacion.monitorNS}
                                            monitorObservaciones={informacion.monitorObservaciones}
                                            monitorNI={informacion.monitorNI}
                                            tecladoMarca={informacion.tecladoMarca}
                                            tecladoModelo={informacion.tecladoModelo}
                                            tecladoNS={informacion.tecladoNS}
                                            tecladoObservaciones={informacion.tecladoObservaciones}
                                            tecladoNI={informacion.tecladoNI}
                                            mouseMarca={informacion.mouseMarca}
                                            mouseModelo={informacion.mouseModelo}
                                            mouseNS={informacion.mouseNS}
                                            mouseObservaciones={informacion.mouseObservaciones}
                                            mouseNI={informacion.mouseNI}
                                            bocinasMarca={informacion.bocinasMarca}
                                            bocinasModelo={informacion.bocinasModelo}
                                            bocinasNS={informacion.bocinasNS}
                                            bocinasObservaciones={informacion.bocinasObservaciones}
                                            bocinasNI={informacion.bocinasNI}
                                            impresoraMarca={informacion.impresoraMarca}
                                            impresoraModelo={informacion.impresoraModelo}
                                            impresoraNS={informacion.impresoraNS}
                                            impresoraObservaciones={informacion.impresoraObservaciones}
                                            impresoraNI={informacion.impresoraNI}
                                            upsMarca={informacion.upsMarca}
                                            upsModelo={informacion.upsModelo}
                                            upsNS={informacion.upsNS}
                                            upsObservaciones={informacion.upsObservaciones}
                                            upsNI={informacion.upsNI}
                                        />
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
