import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import { EditButton } from '../components/TableButtons/EditButton'
import { DeleteButton } from '../components/TableButtons/DeleteButton'
import { PrintButton } from '../components/TableButtons/PrintButton'





export const TableScreen = ({ departamento }) => {

    const [c1, setC1] = useState(''); const [c2, setC2] = useState('')
    const [c3, setC3] = useState(''); const [c4, setC4] = useState('')
    const [c5, setC5] = useState(''); const [c6, setC6] = useState('')
    const [c7, setC7] = useState(''); const [c8, setC8] = useState('')
    const [c9, setC9] = useState(''); const [c10, setC10] = useState('')
    const [c11, setC11] = useState(''); const [c12, setC12] = useState('')
    const [c13, setC13] = useState(''); const [c14, setC14] = useState('')
    const [c15, setC15] = useState(''); const [c16, setC16] = useState('')
    const [c17, setC17] = useState(''); const [c18, setC18] = useState('')
    const [c19, setC19] = useState(''); const [c20, setC20] = useState('')
    const [c21, setC21] = useState(''); const [c22, setC22] = useState('')
    const [c23, setC23] = useState(''); const [c24, setC24] = useState('')
    const [c25, setC25] = useState(''); const [c26, setC26] = useState('')
    const [c27, setC27] = useState(''); const [c28, setC28] = useState('')
    const [c29, setC29] = useState(''); const [c30, setC30] = useState('')
    const [c31, setC31] = useState(''); const [c32, setC32] = useState('')
    const [c33, setC33] = useState(''); const [c34, setC34] = useState('')
    const [c35, setC35] = useState(''); const [c36, setC36] = useState('')
    const [c37, setC37] = useState(''); const [c38, setC38] = useState('')
    const [c39, setC39] = useState(''); const [c40, setC40] = useState('')
    const [c41, setC41] = useState(''); const [c42, setC42] = useState('')
    const [c43, setC43] = useState(''); const [c44, setC44] = useState('')
    const [c45, setC45] = useState(''); const [c46, setC46] = useState('')
    const [c47, setC47] = useState(''); const [c48, setC48] = useState('')
    const [c49, setC49] = useState(''); const [c50, setC50] = useState('')
    const [c51, setC51] = useState(''); const [c52, setC52] = useState('')
    const [c53, setC53] = useState(''); const [c54, setC54] = useState('')
    const [c55, setC55] = useState(''); const [c56, setC56] = useState('')
    const [c57, setC57] = useState(''); const [c58, setC58] = useState('')

    const [dataState, setDataState] = useState('')

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
            .catch((err) => {
                console.log(err)
            })

        return () => {
            mounted = false
        }

    }, [departamento])



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
                            <th scope="col">Creado por</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(dataState).map(([keyNoUsada, informacion], index) => (

                                <tr key={informacion.id} >
                                    <th scope='row'>{index + 1}</th>

                                    {/* <td >{informacion.departamento}</td> */}
                                    <td onInput={(e) => setC1(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.responsable}</td>
                                    <td onInput={(e) => setC2(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.noSello}</td>
                                    <td onInput={(e) => setC3(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.identificadorEquipo}</td>
                                    <td onInput={(e) => setC4(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.placaMadreMarca}</td>
                                    <td onInput={(e) => setC5(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.placaMadreModelo}</td>
                                    <td onInput={(e) => setC6(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.placaMadreNS}</td>
                                    <td onInput={(e) => setC7(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.placaMadreObservaciones}</td>
                                    <td onInput={(e) => setC8(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.discoDuroMarca}</td>
                                    <td onInput={(e) => setC9(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.discoDuroModelo}</td>
                                    <td onInput={(e) => setC10(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.discoDuroNS}</td>
                                    <td onInput={(e) => setC11(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.discoDuroObservaciones}</td>
                                    <td onInput={(e) => setC12(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.memoriaRAMMarca}</td>
                                    <td onInput={(e) => setC13(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.memoriaRAMModelo}</td>
                                    <td onInput={(e) => setC14(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.memoriaRAMNS}</td>
                                    <td onInput={(e) => setC15(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.memoriaRAMObservaciones}</td>
                                    <td onInput={(e) => setC16(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.microProcesadorMarca}</td>
                                    <td onInput={(e) => setC17(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.microProcesadorModelo}</td>
                                    <td onInput={(e) => setC18(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.microProcesadorNS}</td>
                                    <td onInput={(e) => setC19(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.microProcesadorObservaciones}</td>
                                    <td onInput={(e) => setC20(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.fuenteInternaMarca}</td>
                                    <td onInput={(e) => setC21(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.fuenteInternaModelo}</td>
                                    <td onInput={(e) => setC22(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.fuenteInternaNS}</td>
                                    <td onInput={(e) => setC23(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.fuenteInternaObservaciones}</td>
                                    <td onInput={(e) => setC24(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.lectorCDDVDMarca}</td>
                                    <td onInput={(e) => setC25(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.lectorCDDVDModelo}</td>
                                    <td onInput={(e) => setC26(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.lectorCDDVDNS}</td>
                                    <td onInput={(e) => setC27(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.lectorCDDVDObservaciones}</td>
                                    <td onInput={(e) => setC28(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.computadoraNI}</td>
                                    <td onInput={(e) => setC29(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorMarca}</td>
                                    <td onInput={(e) => setC30(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorModelo}</td>
                                    <td onInput={(e) => setC31(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorNS}</td>
                                    <td onInput={(e) => setC32(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorObservaciones}</td>
                                    <td onInput={(e) => setC33(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.monitorNI}</td>
                                    <td onInput={(e) => setC34(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoMarca}</td>
                                    <td onInput={(e) => setC35(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoModelo}</td>
                                    <td onInput={(e) => setC36(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoNS}</td>
                                    <td onInput={(e) => setC37(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoObservaciones}</td>
                                    <td onInput={(e) => setC38(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.tecladoNI}</td>
                                    <td onInput={(e) => setC39(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseMarca}</td>
                                    <td onInput={(e) => setC40(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseModelo}</td>
                                    <td onInput={(e) => setC41(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseNS}</td>
                                    <td onInput={(e) => setC42(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseObservaciones}</td>
                                    <td onInput={(e) => setC43(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.mouseNI}</td>
                                    <td onInput={(e) => setC44(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasMarca}</td>
                                    <td onInput={(e) => setC45(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasModelo}</td>
                                    <td onInput={(e) => setC46(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasNS}</td>
                                    <td onInput={(e) => setC47(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasObservaciones}</td>
                                    <td onInput={(e) => setC48(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.bocinasNI}</td>
                                    <td onInput={(e) => setC49(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraMarca}</td>
                                    <td onInput={(e) => setC50(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraModelo}</td>
                                    <td onInput={(e) => setC51(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraNS}</td>
                                    <td onInput={(e) => setC52(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraObservaciones}</td>
                                    <td onInput={(e) => setC53(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.impresoraNI}</td>
                                    <td onInput={(e) => setC54(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsMarca}</td>
                                    <td onInput={(e) => setC55(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsModelo}</td>
                                    <td onInput={(e) => setC56(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsNS}</td>
                                    <td onInput={(e) => setC57(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsObservaciones}</td>
                                    <td onInput={(e) => setC58(e.target.textContent)} contentEditable={true} suppressContentEditableWarning={true}>{informacion.upsNI}</td>
                                    <td>{informacion.creadoPor}</td>
                                    <td>{informacion.fecha}</td>

                                    <th >{index + 1}</th>
                                    <td className='buttonPrintEditDelete'>
                                        <PrintButton
                                            id={informacion.id} />
                                        <EditButton
                                            id={informacion.id}
                                            responsable={c1 === '' ? informacion.responsable : c1}
                                            noSello={c2 === '' ? informacion.noSello : c2}
                                            identificadorEquipo={c3 === '' ? informacion.identificadorEquipo : c3}
                                            placaMadreMarca={c4 === '' ? informacion.placaMadreMarca : c4}
                                            placaMadreModelo={c5 === '' ? informacion.placaMadreModelo : c5}
                                            placaMadreNS={c6 === '' ? informacion.placaMadreNS : c6}
                                            placaMadreObservaciones={c7 === '' ? informacion.placaMadreObservaciones : c7}
                                            discoDuroMarca={c8 === '' ? informacion.discoDuroMarca : c8}
                                            discoDuroModelo={c9 === '' ? informacion.discoDuroModelo : c9}
                                            discoDuroNS={c10 === '' ? informacion.discoDuroNS : c10}
                                            discoDuroObservaciones={c11 === '' ? informacion.discoDuroObservaciones : c11}
                                            memoriaRAMMarca={c12 === '' ? informacion.memoriaRAMMarca : c12}
                                            memoriaRAMModelo={c13 === '' ? informacion.memoriaRAMModelo : c13}
                                            memoriaRAMNS={c14 === '' ? informacion.memoriaRAMNS : c14}
                                            memoriaRAMObservaciones={c15 === '' ? informacion.memoriaRAMObservaciones : c15}
                                            microProcesadorMarca={c16 === '' ? informacion.microProcesadorMarca : c16}
                                            microProcesadorModelo={c17 === '' ? informacion.microProcesadorModelo : c17}
                                            microProcesadorNS={c18 === '' ? informacion.microProcesadorNS : c18}
                                            microProcesadorObservaciones={c19 === '' ? informacion.microProcesadorObservaciones : c19}
                                            fuenteInternaMarca={c20 === '' ? informacion.fuenteInternaMarca : c20}
                                            fuenteInternaModelo={c21 === '' ? informacion.fuenteInternaModelo : c21}
                                            fuenteInternaNS={c22 === '' ? informacion.fuenteInternaNS : c22}
                                            fuenteInternaObservaciones={c23 === '' ? informacion.fuenteInternaObservaciones : c23}
                                            lectorCDDVDMarca={c24 === '' ? informacion.lectorCDDVDMarca : c24}
                                            lectorCDDVDModelo={c25 === '' ? informacion.lectorCDDVDModelo : c25}
                                            lectorCDDVDNS={c26 === '' ? informacion.lectorCDDVDNS : c26}
                                            lectorCDDVDObservaciones={c27 === '' ? informacion.lectorCDDVDObservaciones : c27}
                                            computadoraNI={c28 === '' ? informacion.computadoraNI : c28}
                                            monitorMarca={c29 === '' ? informacion.monitorMarca : c29}
                                            monitorModelo={c30 === '' ? informacion.monitorModelo : c30}
                                            monitorNS={c31 === '' ? informacion.monitorNS : c31}
                                            monitorObservaciones={c32 === '' ? informacion.monitorObservaciones : c32}
                                            monitorNI={c33 === '' ? informacion.monitorNI : c33}
                                            tecladoMarca={c34 === '' ? informacion.tecladoMarca : c34}
                                            tecladoModelo={c35 === '' ? informacion.tecladoModelo : c35}
                                            tecladoNS={c36 === '' ? informacion.tecladoNS : c36}
                                            tecladoObservaciones={c37 === '' ? informacion.tecladoObservaciones : c37}
                                            tecladoNI={c38 === '' ? informacion.tecladoNI : c38}
                                            mouseMarca={c39 === '' ? informacion.mouseMarca : c39}
                                            mouseModelo={c40 === '' ? informacion.mouseModelo : c40}
                                            mouseNS={c41 === '' ? informacion.mouseNS : c41}
                                            mouseObservaciones={c42 === '' ? informacion.mouseObservaciones : c42}
                                            mouseNI={c43 === '' ? informacion.mouseNI : c43}
                                            bocinasMarca={c44 === '' ? informacion.bocinasMarca : c44}
                                            bocinasModelo={c45 === '' ? informacion.bocinasModelo : c45}
                                            bocinasNS={c46 === '' ? informacion.bocinasNS : c46}
                                            bocinasObservaciones={c47 === '' ? informacion.bocinasObservaciones : c47}
                                            bocinasNI={c48 === '' ? informacion.bocinasNI : c48}
                                            impresoraMarca={c49 === '' ? informacion.impresoraMarca : c49}
                                            impresoraModelo={c50 === '' ? informacion.impresoraModelo : c50}
                                            impresoraNS={c51 === '' ? informacion.impresoraNS : c51}
                                            impresoraObservaciones={c52 === '' ? informacion.impresoraObservaciones : c52}
                                            impresoraNI={c53 === '' ? informacion.impresoraNI : c53}
                                            upsMarca={c54 === '' ? informacion.upsMarca : c54}
                                            upsModelo={c55 === '' ? informacion.upsModelo : c55}
                                            upsNS={c56 === '' ? informacion.upsNS : c56}
                                            upsObservaciones={c57 === '' ? informacion.upsObservaciones : c57}
                                            upsNI={c58 === '' ? informacion.upsNI : c58}
                                        />
                                        <DeleteButton
                                            id={informacion.id}
                                        /*departamento={departamento}*/
                                        />
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
