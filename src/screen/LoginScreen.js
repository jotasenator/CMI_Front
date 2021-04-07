import React, { useContext } from 'react'
import { useForm } from '../components/hooks/useForm'
import Axios from 'axios'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'
import bcrypt from '../../node_modules/bcryptjs'


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


                        alert('Este es un usuario verificado')

                        dispatch({
                            type: types.login,
                            payload: {
                                name: usuarioAdmin
                            }
                        })


                    }
                    history.replace('/form')
                    if (!(verificar !== undefined)) {

                        alert('Este no es un usuario verificado')

                    }

                })
                .catch((err) => {
                    console.log(err)

                })

        }
        if (!(usuarioAdmin !== '' && password !== '')) {
            alert('Por favor rellene los campos correctamente')
        }


    }

    return (
        <>
            <div className='container mt-5' style={{ textAlign: 'center' }}>

                <h1>Bienvenido a CMI Estadio Capitán San Luis</h1>
            </div>

            <div
                style={{
                    boxShadow: '0px 0px 5px  0px #0062cc',
                    borderRadius: '10px',
                    marginTop: '10vh'

                }}
                className='container col-3 p-5'>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 ">
                        <label className="form-label">Usuario</label>
                        <input type="text"
                            className="form-control"
                            name='usuarioAdmin'
                            onChange={handleInputchange}
                            value={usuarioAdmin}

                        />
                        <div className="text-muted">
                            Solo usuarios con privilegios de administración.</div>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Contraseña</label>
                        <input type="password"
                            className="form-control"
                            name='password'
                            onChange={handleInputchange}
                            value={password}

                        />
                    </div>
                    <div className="mb-3 form-check">


                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>



        </>
    )
}
