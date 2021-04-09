import React, { useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'



export const TableScreen = ({ departamento }) => {

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const dataInformatica = data.eventos.filter(x =>
                    x.departamento === departamento

                )
                console.log(dataInformatica)




            })
    }, [departamento])







    return (
        <div style={{ widht: '500px', overflow: 'scroll' }} >
            <table className="table table-striped table-bordered table-hover ">
                <thead >
                    <tr  >
                        <th scope="col">No</th>
                        <th scope="col">departamento</th>
                        <th scope="col">responsable</th>
                        <th scope="col">noSello</th>
                        <th scope="col">identificadorEquipo</th>
                        <th scope="col">placaMadreMarca</th>
                        <th scope="col">placaMadreModelo</th>
                        <th scope="col">placaMadreNS</th>
                        <th scope="col">placaMadreObservaciones</th>
                        <th scope="col">discoDuroMarca</th>
                        <th scope="col">discoDuroModelo</th>
                        <th scope="col">discoDuroNS</th>
                        <th scope="col">discoDuroObservaciones</th>
                        <th scope="col">memoriaRAMMarca</th>
                        <th scope="col">memoriaRAMModelo</th>
                        <th scope="col">memoriaRAMNS</th>
                        <th scope="col">memoriaRAMObservaciones</th>
                        <th scope="col">microProcesadorMarca</th>
                        <th scope="col">microProcesadorModelo</th>
                        <th scope="col">microProcesadorNS</th>
                        <th scope="col">microProcesadorObservaciones</th>
                        <th scope="col">fuenteInternaMarca</th>
                        <th scope="col">fuenteInternaModelo</th>
                        <th scope="col">fuenteInternaNS</th>
                        <th scope="col">fuenteInternaObservaciones</th>
                        <th scope="col">lectorCDDVDMarca</th>
                        <th scope="col">lectorCDDVDModelo</th>
                        <th scope="col">lectorCDDVDNS</th>
                        <th scope="col">lectorCDDVDObservaciones</th>
                        <th scope="col">computadoraNI</th>
                        <th scope="col">monitorMarca</th>
                        <th scope="col">monitorModelo</th>
                        <th scope="col">monitorNS</th>
                        <th scope="col">monitorObservaciones</th>
                        <th scope="col">monitorNI</th>
                        <th scope="col">tecladoMarca</th>
                        <th scope="col">tecladoModelo</th>
                        <th scope="col">tecladoNS</th>
                        <th scope="col">tecladoObservaciones</th>
                        <th scope="col">tecladoNI</th>
                        <th scope="col">mouseMarca</th>
                        <th scope="col">mouseModelo</th>
                        <th scope="col">mouseNS</th>
                        <th scope="col">mouseObservaciones</th>
                        <th scope="col">mouseNI</th>
                        <th scope="col">bocinasMarca</th>
                        <th scope="col">bocinasModelo</th>
                        <th scope="col">bocinasNS</th>
                        <th scope="col">bocinasObservaciones</th>
                        <th scope="col">bocinasNI</th>
                        <th scope="col">impresoraMarca</th>
                        <th scope="col">impresoraModelo</th>
                        <th scope="col">impresoraNS</th>
                        <th scope="col">impresoraObservaciones</th>
                        <th scope="col">impresoraNI</th>
                        <th scope="col">upsMarca</th>
                        <th scope="col">upsModelo</th>
                        <th scope="col">upsNS</th>
                        <th scope="col">upsObservaciones</th>
                        <th scope="col">upsNI</th>


                    </tr>
                </thead>



                <tbody>
                    <tr>

                        <th scope="row">1</th>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Informatica</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td>Maykel</td>
                        <td>@1234</td>
                        <td>@jotas</td>
                        <td style={{ display: 'flex', flexDirection: 'row' }}>
                            <button className='btn btn-outline-primary mr-1'>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button className='btn btn-outline-danger '>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>

                        </td>


                    </tr>


                </tbody>




            </table>

        </div>
    )
}
