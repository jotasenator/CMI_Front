import React, { useContext } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

import '../css.css'



export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {
        history.replace('/login')

        dispatch({
            type: types.logout
        })

    }


    return (
        <nav className=" nav1 navbar navbar-expand-sm navbar-dark ">

            <Link
                className=" navLogo navbar-brand"
                to="/"
                title='Control de Medios Informáticos'
            >
                CMI Estadio Capitán San Luis
            </Link>

            <div className="navbar-collapse" >
                <div className="navbar-nav" >

                    <NavLink

                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                        Planilla
                    </NavLink>

                    <button className="navbar-toggler"


                        type="button"
                        data-toggle="collapse"
                        data-target="1navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse"

                        id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item dropdown  ">
                                <button
                                    className=" button1 nav-link dropdown-toggle   "
                                    style={{ padding: '0' }}
                                    data-toggle="dropdown"
                                >
                                    Departamentos
                                </button>

                                <div className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink className="dropdown-item" to='/economia'>Economia</NavLink>
                                    <NavLink className="dropdown-item" to='/informatica' >informatica</NavLink>
                                    <NavLink className="dropdown-item" to='/rrhh' >Recursos Humanos</NavLink>
                                    <NavLink className="dropdown-item" to='/direccion'>Direccion</NavLink>
                                    <NavLink className="dropdown-item" to='/comision'>Comision de Cuadros</NavLink>
                                    <NavLink className="dropdown-item" to='/cvp'>Custodios</NavLink>

                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className=' usuario nav-item nav-link btn'>
                        {user.name}
                    </span>
                    <button

                        className="nav-item nav-link btn"
                        onClick={handleLogout}

                    >
                        Logout
                    </button>
                </ul>
            </div>


        </nav >
    )
}