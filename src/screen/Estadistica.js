import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Fecha } from '../components/Estadistica/Fecha'

export const Estadistica = () => {

    const [pcEstadio, setPcEstadio] = useState(0)
    const [pcPolivalente, setPcPolivalente] = useState(0)

    const [impresoraEstadio, setImpresoraEstadio] = useState(0)
    const [impresoraPolivalente, setImpresoraPolivalente] = useState(0)

    const [fuenteEstadio, setFuenteEstadio] = useState(0)
    const [fuentePolivalente, setFuentePolivalente] = useState(0)

    const [bocinasEstadio, setBocinasEstadio] = useState(0)
    const [bocinasPolivalente, setBocinasPolivalente] = useState(0)

    const [statusButtonPrint, setStatusButtonPrint] = useState(false)

    //computadoras

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const numeroPCEstadio = data.eventos.filter(x =>
                    x.instalacion === 'Estadio'
                ).length
                setPcEstadio(numeroPCEstadio)
            })
    }, [])

    useEffect(() => {

        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const numeroPCPolivalente = data.eventos.filter(x =>
                    x.instalacion === 'Polivalente'
                ).length
                setPcPolivalente(numeroPCPolivalente)
            })
    }, [])

    //impresora

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const numeroImpresoraEstadio = data.eventos.filter(x =>
                    x.instalacion === 'Estadio' && x.impresoraMarca !== '-' && x.impresoraModelo !== '-' && x.impresoraNI !== '-' && x.impresoraNS !== '-'
                ).length
                setImpresoraEstadio(numeroImpresoraEstadio)
            })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const numeroImpresoraPolivalente = data.eventos.filter(x =>
                    x.instalacion === 'Polivalente' && x.impresoraMarca !== '-' && x.impresoraModelo !== '-' && x.impresoraNI !== '-' && x.impresoraNS !== '-'
                ).length
                setImpresoraPolivalente(numeroImpresoraPolivalente)
            })
    }, [])

    // ups

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const numeroFuenteEstadio = data.eventos.filter(x =>
                    x.instalacion === 'Estadio' && x.upsMarca !== '-' && x.upsModelo !== '-' && x.upsNS !== '-' && x.upsNI !== '-'
                ).length
                setFuenteEstadio(numeroFuenteEstadio)
            })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const numeroFuentePolivalente = data.eventos.filter(x =>
                    x.instalacion === 'Polivalente' && x.upsMarca !== '-' && x.upsModelo !== '-' && x.upsNS !== '-' && x.upsNI !== '-'
                ).length
                setFuentePolivalente(numeroFuentePolivalente)
            })
    }, [])

    // bocinas
    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const numeroBocinasEstadio = data.eventos.filter(x =>
                    x.instalacion === 'Estadio' && x.bocinasMarca !== '-' && x.bocinasModelo !== '-' && x.bocinasNS !== '-' && x.bocinasNI !== '-'
                ).length
                setBocinasEstadio(numeroBocinasEstadio)
            })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then(({ data }) => {
                const numeroBocinasPolivalente = data.eventos.filter(x =>
                    x.instalacion === 'Polivalente' && x.fuenteInterna !== '-' && x.fuenteInterna !== '-' && x.fuenteInterna !== '-' && x.fuenteInterna !== '-'
                ).length
                setBocinasPolivalente(numeroBocinasPolivalente)
            })
    }, [])

    const handlePrint = () => {
        setStatusButtonPrint(true)
        window.print()
        setStatusButtonPrint(false)
    }

    return (
        <>
            <div className='tabla-estadistica container mt-5'>
                <h2 className=''>Estadísticas</h2>
                <div style={{ textAlign: 'end' }} className='mb-3'>

                    <Fecha />
                </div>
                <div >
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr className='tabla-estadistica-encabezado' >
                                <th >Activos Fijos Tangibles</th>
                                <th scope="col" >Estadio Capitán San Luis</th>
                                <th scope="col">Polivalente 19 de noviembre</th>
                                <th scope="col">Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className='pl-5'>Medio de cómputo</td>
                                <td className='tabla-estadistica-encabezado'>{pcEstadio}</td>
                                <td className='tabla-estadistica-encabezado'>{pcPolivalente}</td>
                                <td className='tabla-estadistica-encabezado'>{pcEstadio + pcPolivalente}</td>


                            </tr>
                            <tr>
                                <td className='pl-5'>Fuente externa</td>
                                <td className='tabla-estadistica-encabezado'>{fuenteEstadio}</td>
                                <td className='tabla-estadistica-encabezado'>{fuentePolivalente}</td>
                                <td className='tabla-estadistica-encabezado'>{fuenteEstadio + fuentePolivalente}</td>

                            </tr>
                            <tr>
                                <td className='pl-5'>Impresora</td>
                                <td className='tabla-estadistica-encabezado'>{impresoraEstadio}</td>
                                <td className='tabla-estadistica-encabezado'>{impresoraPolivalente}</td>
                                <td className='tabla-estadistica-encabezado'>{impresoraEstadio + impresoraPolivalente}</td>

                            </tr>
                            <tr>
                                <td className='pl-5'>Bocinas</td>
                                <td className='tabla-estadistica-encabezado'>{bocinasEstadio}</td>
                                <td className='tabla-estadistica-encabezado'>{bocinasPolivalente}</td>
                                <td className='tabla-estadistica-encabezado'>{bocinasEstadio + bocinasPolivalente}</td>

                            </tr>


                        </tbody>
                    </table>
                </div>
                {
                    statusButtonPrint ||
                    (

                        <button
                            className="btn btn-primary mt-3"
                            onClick={handlePrint}

                        >
                            Imprimir
                        </button>

                    )

                }

            </div>

        </>
    )
}
