import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { AuthContext } from '../auth/AuthContext'

export const PrintScreen = () => {


    const { id } = useContext(AuthContext)

    const [data, setData] = useState('')

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then((res) => {
                const dataGet = res.data.eventos
                const [dataId] = dataGet.filter(x => x.id === id.id)
                setData(dataId)
                window.print()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])



    return (
        <div className='print-table container mt-5 mb-5'>
            <div className='encabezado1'>

                <p>Dirección Provincial de Deportes</p>
                <p>Calle Gerardo Medina s/n Rpto Capitán San Luis, Pinar del Río, Pinar del Río</p>
                <p>Teléfono (+53)48727282</p>
            </div>
            <hr />
            <div className='encabezado2'>
                <p>MODELO FICHA TÉCNICA DEL EQUIPAMIENTO INFORMÁTICO </p>
            </div>
            <div className='organismo-foto-usuario'>
                <p><span>Organismo:</span> INDER</p>

            </div>
            <p><span>Entidad:</span> Dirección Provincial de Deportes Pinar del Río</p>
            <p><span>Área o Dirección de Trabajo:</span> {data.departamento}</p>
            <p><span>Responsable:</span> {data.responsable}</p>

            <p><span>DESCRIPCIÓN TÉCNICA DEL EQUIPO INFORMÁTICO</span></p>
            <div className='nombre-dominio'>
                <p><span>Dominio:</span> Sí</p>
                <p><span>Nombre:</span> PRI</p>
            </div>
            <p><span>Identificador del Equipo:</span> {data.identificadorEquipo}</p>
            <p><span>Dirección IP:</span> Automático</p>

            <div>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">No. Inventario</th>
                            <th scope="col">Medios</th>
                            <th scope="col">Prestaciones</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">No. Serie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="5">{data.computadoraNI}</td>
                            <td rowSpan="5">UCP</td>
                            <td>Placa Madre</td>
                            <td>{data.placaMadreMarca}</td>
                            <td>{data.placaMadreModelo}</td>
                            <td>{data.placaMadreNS}</td>
                        </tr>
                        <tr>
                            <td>Disco Duro</td>
                            <td>{data.discoDuroMarca}</td>
                            <td>{data.discoDuroModelo}</td>
                            <td>{data.discoDuroNS}</td>
                        </tr>
                        <tr>
                            <td>Microprocesador</td>
                            <td>{data.microProcesadorMarca}</td>
                            <td>{data.microProcesadorModelo}</td>
                            <td>{data.microProcesadorNS}</td>
                        </tr>
                        <tr>
                            <td>Fuente Interna</td>
                            <td>{data.fuenteInternaMarca}</td>
                            <td>{data.fuenteInternaModelo}</td>
                            <td>{data.fuenteInternaNS}</td>
                        </tr>
                        <tr>
                            <td>Lector CD/DVD</td>
                            <td>{data.lectorCDDVDMarca}</td>
                            <td>{data.lectorCDDVDModelo}</td>
                            <td>{data.lectorCDDVDNS}</td>
                        </tr>
                        <tr>
                            <td>{data.monitorNI}</td>
                            <td>Monitor</td>
                            <td>-</td>
                            <td>{data.monitorMarca}</td>
                            <td>{data.monitorModelo}</td>
                            <td>{data.monitorNS}</td>
                        </tr>
                        <tr>
                            <td>{data.tecladoNI}</td>
                            <td>Teclado</td>
                            <td>-</td>
                            <td>{data.tecladoMarca}</td>
                            <td>{data.tecladoModelo}</td>
                            <td>{data.tecladoNS}</td>
                        </tr>
                        <tr>
                            <td>{data.mouseNI}</td>
                            <td>Ratón</td>
                            <td>-</td>
                            <td>{data.mouseMarca}</td>
                            <td>{data.mouseModelo}</td>
                            <td>{data.mouseNS}</td>
                        </tr>
                        <tr>
                            <td>{data.bocinasNI}</td>
                            <td>Bocinas</td>
                            <td>-</td>
                            <td>{data.bocinasMarca}</td>
                            <td>{data.bocinasModelo}</td>
                            <td>{data.bocinasNS}</td>
                        </tr>
                        <tr>
                            <td>{data.impresoraNI}</td>
                            <td>Impresora</td>
                            <td>-</td>
                            <td>{data.impresoraMarca}</td>
                            <td>{data.impresoraModelo}</td>
                            <td>{data.impresoraNS}</td>
                        </tr>
                        <tr>
                            <td>{data.upsNI}</td>
                            <td>Fuente</td>
                            <td>-</td>
                            <td>{data.upsMarca}</td>
                            <td>{data.upsModelo}</td>
                            <td>{data.upsNS}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><span>No. Sello:</span> {data.noSello}</p>

            <div className='mt-5 '>
                <p><span>CONTROL DE ENTRADAS, SALIDAS Y MOVIMIENTO DE  LAS TECNOLOGÍAS INFORMÁTICAS</span></p>

                <div>
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Medio de cómputo</th>
                                <th scope="col">Fecha de entrada</th>
                                <th scope="col">Fecha de salida</th>
                                <th scope="col">Motivo del movimiento</th>
                                <th scope="col">Responsable del movimiento</th>
                                <th scope="col">Firma</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}
