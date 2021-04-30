import React from 'react'
import { useForm } from '../components/hooks/useForm'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { IconoAdmin } from '../components/adminScreen/IconoAdmin'


import '../css.css'



export const CrearAdminScreen = () => {

    const [loginValues, handleInputchange, reset] = useForm({
        usuarioAdmin: '',
        password1: '',
        password2: '',
    })

    const { usuarioAdmin, password1, password2 } = loginValues

    const handleSubmit = (e) => {
        e.preventDefault()

        if (usuarioAdmin !== '' && password1 !== '' && password2 !== '') {
            Axios.get('http://localhost:4000/user/')
                .then((res) => {
                    const cuentasBD = res.data.admin
                    const verificarUsuario = cuentasBD.find(elemento => elemento.usuario === usuarioAdmin)
                    if (verificarUsuario === undefined) {
                        //si contrasenhas coinciden guardar usuario y password
                        if (password1 === password2) {
                            Axios.post('http://localhost:4000/user/',
                                {
                                    usuario: usuarioAdmin,
                                    password: password1
                                }
                            )
                                .then(() => {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Usuario creado con éxito',
                                        showConfirmButton: true,
                                        timer: 1500
                                    })
                                    reset()

                                })
                                .catch((err) => {
                                    console.log(err)

                                })
                        }
                        if (password1 !== password2) {
                            Swal.fire(
                                'Las contraseñas no coinciden',
                                'Verifique las contraseñas',
                                'warning'
                            )


                        }

                    }
                    if (!(verificarUsuario === undefined)) {
                        Swal.fire(
                            'Usuario ya existe',
                            'Escoja otro nombre de usuario',
                            'warning'
                        )
                        reset()
                    }
                })

        } else {
            Swal.fire(
                'Error',
                'Entrada de datos incorrecta',
                'error'
            )
            reset()
        }
    }

    return (
        <>
            <div className='loginBoxAdmin container col-4 p-5'>
                <div className=' container container-mio' >
                    <div className='loginTitleIcon'>
                        <h3
                            title='Control de Medios Informáticos'>
                            Crear usuario administrador
                            </h3>
                        <div className='m-3'>
                            <IconoAdmin />
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} >
                    <div className="mb-3 " >
                        <label className="form-label ">Nuevo usuario</label>
                        <input type="text"
                            autoComplete="off"
                            className="form-control"
                            name='usuarioAdmin'
                            onChange={handleInputchange}
                            value={usuarioAdmin}
                            autoFocus
                        />
                    </div>

                    <div className="mb-3 ">
                        <label className="form-label">Contraseña</label>
                        <input
                            autoComplete="off"
                            type="password"
                            className="form-control"
                            name='password1'
                            onChange={handleInputchange}
                            value={password1}
                        />
                    </div>

                    <div className="mb-3 ">
                        <label className="form-label">Repetir contraseña</label>
                        <input
                            autoComplete="off"
                            type="password"
                            className="form-control"
                            name='password2'
                            onChange={handleInputchange}
                            value={password2}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">
                        Guardar
                    </button>
                </form>

            </div>






        </>
    )
}
