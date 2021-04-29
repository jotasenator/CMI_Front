import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export const PrintScreen = ({ id = '6075f3dad7ef790340ddf24b' }) => {

    const [data, setData] = useState('')

    useEffect(() => {
        Axios.get('http://localhost:4000/api/')
            .then((res) => {
                const dataGet = res.data.eventos
                const [dataId] = dataGet.filter(x => x.id === id)

                setData(dataId)


            })
            .catch((err) => {
                console.log(err)

            })


    }, [id])





    return (
        <>
            <p>MODELO FICHA TÉCNICA DE EQUIPAMIENTO INFORMÁTICO </p>
            <p>Organismo: INDER</p>
            <p>Entidad: Dirección Provincial de Deporte Pinar del Río</p>
            <p>Área o Dirección de Trabajo: {data.departamento}</p>
            <p>Responsable: {data.responsable}</p>

            <p>DESCRIPCIÓN TÉCNICA DEL EQUIPO INFORMÁTICO</p>
            <p>Dominio: Sí</p>
            <p>Nombre: PRI</p>
            <p>Identificador del Equipo: {data.identificadorEquipo}</p>
            <p>Dirección IP: Automático</p>




        </>
    )
}
