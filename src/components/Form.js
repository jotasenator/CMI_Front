import React from 'react'

import { useForm } from './hooks/useForm'

import './login.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


import Axios from 'axios'




export const Form = () => {

    const [formValues, handleInputchange] = useForm({
        departamento: '',
        nombreUsuario: '',
        placaMadre: '',
        impresora: '',


    })

    const { nombreUsuario, placaMadre, impresora } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)


        Axios.post('http://localhost:4000/api/', formValues)
            .then(() => {
                alert('Se ha añadido correctamente la información a la base de datos.')
            })
            .catch(() => {
                alert('NO se ha añadido correctamente la información a la base de datos.')
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
                            <option >Busque aqui a que departamento pertenece</option>
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
                            name='nombreUsuario'
                            className="form-control"
                            placeholder="Nombre de usuario"
                            onChange={handleInputchange}
                            value={nombreUsuario}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name='placaMadre'
                            className="form-control"
                            placeholder="Placa Madre"
                            onChange={handleInputchange}
                            value={placaMadre}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name='impresora'
                            className="form-control"
                            placeholder=" Impresora"
                            onChange={handleInputchange}
                            value={impresora}
                        />
                    </div>

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

