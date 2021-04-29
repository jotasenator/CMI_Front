import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'
import Swal from 'sweetalert2'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
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
        <nav className="   nav1 navbar navbar-expand-sm navbar-dark ">

            <Link
                className=" navLogo navbar-brand"
                to="/"
                title='Control de Medios Informáticos'
            >
                CMI Estadio Capitán San Luis
            </Link>
            <div className="navbar-collapse" >
                <div className="navbar-nav" >
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="1navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item dropdown  ">
                                <button
                                    className=" button1 nav-link dropdown-toggle   "
                                    style={{ padding: '0' }}
                                    data-toggle="dropdown"
                                >
                                    Planillas
                                </button>

                                <div className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink">

                                    <NavLink onClick={() => Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Capitán San Luis',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                    } className="dropdown-item" to='/formEstadio'>Estadio</NavLink>
                                    <NavLink onClick={() => Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Polivalente 19 de noviembre',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    } className="dropdown-item" to='/formPolivalente' >Polivalente</NavLink>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar-collapse" >
                <div className="navbar-nav" >
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="1navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
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

                                    {/* estadio */}
                                    <h5 className="dropdown-header"><i>Estadio</i></h5>

                                    <NavLink className="dropdown-item" to='/actividadDeportiva'>Actividad Deportiva</NavLink>
                                    <NavLink className="dropdown-item" to='/altoRendimiento'>Alto Rendimiento</NavLink>
                                    <NavLink className="dropdown-item" to='/aseguramiento' >Aseguramiento</NavLink>
                                    <NavLink className="dropdown-item" to='/cabinaBaseball'>Cabina de Baseball</NavLink>
                                    <NavLink className="dropdown-item" to='/culturaFisica'>Cultura Fisica</NavLink>
                                    <NavLink className="dropdown-item" to='/direccionEconomiaProvincial'>Dirección Economía Provincial</NavLink>
                                    <NavLink className="dropdown-item" to='/direccionEstadio'>Dirección Estadio</NavLink>
                                    <NavLink className="dropdown-item" to='/economiaEstadio'>Economía Estadio</NavLink>
                                    <NavLink className="dropdown-item" to='/economiaUnidadPresupuestada'>Economía Unidad Presupuestada</NavLink>
                                    <NavLink className="dropdown-item" to='/inversiones' >Inversiones</NavLink>
                                    <NavLink className="dropdown-item" to='/nodoInformatica'>Nodo Informática</NavLink>
                                    <NavLink className="dropdown-item" to='/recursosHumanos'>Recursos Humanos</NavLink>
                                    <NavLink className="dropdown-item" to='/salaNavegacion'>Sala Navegación</NavLink>
                                    <NavLink className="dropdown-item" to='/seguridadProteccion'>Seguridad y Protección</NavLink>
                                    {/* polivalente */}
                                    <h5 className="dropdown-header"><i>Polivalente</i></h5>

                                    <NavLink className="dropdown-item" to='/colaboracion'>Colaboración</NavLink>
                                    <NavLink className="dropdown-item" to='/comisionCuadros'>Comisión de Cuadros</NavLink>
                                    <NavLink className="dropdown-item" to='/direccionPolivalente'>Dirección Polivalente</NavLink>
                                    <NavLink className="dropdown-item" to='/inspeccion'>Inspección</NavLink>
                                    <NavLink className="dropdown-item" to='/organizacion'>Organización</NavLink>
                                    <NavLink className="dropdown-item" to='/subdireccionDocencia'>Subdirección Docencia</NavLink>
                                    <NavLink className="dropdown-item" to='/subdireccionPolivalente'>Subdirección Polivalente</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span style={{ color: 'yellow' }} className=' usuario nav-item nav-link btn'>
                        <strong>{user.name}</strong>
                    </span>
                    <NavLink to='/administracion' className="administracion nav-item nav-link btn ">
                        Administración
                    </NavLink>
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