import React, { useContext } from 'react'
import { useForm } from '../components/hooks/useForm'
import Axios from 'axios'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'
import bcrypt from 'bcryptjs'
import Swal from 'sweetalert2'
import { IconoInicio } from '../components/loginScreen/IconoInicio'

import '../css.css'



export const LoginScreen = ({ history }) => {



    const [loginValues, handleInputchange] = useForm({
        usuarioAdmin: '',
        password: '',

    })

    const { usuarioAdmin, password } = loginValues

    const { dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // obtener usuario y password que acaba de entrar el usuario y 
        // encontrar un match, comparando password encriptados
        if (usuarioAdmin !== '' && password !== '') {

            Axios.get('http://localhost:4000/user/')
                .then((res) => {

                    const cuentasBD = res.data.admin

                    const verificar = cuentasBD.find(
                        elemento => elemento.usuario === usuarioAdmin
                            &&
                            bcrypt.compareSync(password, elemento.password)

                    )


                    if (verificar !== undefined) {


                        Swal.fire({

                            position: 'center',
                            icon: 'success',
                            title: 'Usuario verificado con éxito',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        setTimeout(() => {
                            dispatch({
                                type: types.login,
                                payload: {
                                    name: usuarioAdmin
                                }
                            })
                        }
                            , 1000)

                    }


                    history.replace('/form')



                    if (!(verificar !== undefined)) {

                        Swal.fire(
                            'Error',
                            'Usuario no verificado',
                            'error'
                        )

                    }

                })
                .catch((err) => {
                    console.log(err)

                })

        }
        if (!(usuarioAdmin !== '' && password !== '')) {
            Swal.fire(
                'Error   ',
                'Entrada de datos incorrecta',
                'error'
            )
        }


    }

    return (
        <>
            <div className='imageLogin' >


                <div className='loginBox container col-4 p-5'>
                    <div className=' container container-mio' >
                        <div className='loginTitleIcon'>
                            <h1
                                title='Control de Medios Informáticos'>
                                CMI
                        </h1>
                            <div className='m-3'>

                                <IconoInicio />
                            </div>
                        </div>

                        <h3>
                            Capitán San Luis
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit} >
                        <div className="mb-3 " >
                            <label className="form-label ">Usuario</label>
                            <input type="text"
                                autoComplete="off"
                                className="form-control"
                                name='usuarioAdmin'
                                onChange={handleInputchange}
                                value={usuarioAdmin}
                                autoFocus

                            />
                            <div className="text">
                                Solo usuarios con privilegios de administración</div>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label">Contraseña</label>
                            <input
                                autoComplete="off"
                                type="password"
                                className="form-control"
                                name='password'
                                onChange={handleInputchange}
                                value={password}

                            />
                        </div>
                        <div className="mb-3 form-check">


                        </div>
                        <button type="submit" className="btn btn-primary mt-3">
                            Entrar al sistema
                            </button>
                    </form>

                </div>

            </div>




        </>
    )
}
