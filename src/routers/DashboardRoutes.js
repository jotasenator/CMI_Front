import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Navbar } from '../ui/Navbar'

import { FormScreenEstadio } from '../screen/FormScreenEstadio'
import { FormScreenPolivalente } from '../screen/FormScreenPolivalente'
import { Estadistica } from '../screen/Estadistica'



//estadio  13 departamentos
import { AltoRendimiento } from '../screen/departamentos/Estadio/AltoRendimiento'
import { Aseguramiento } from '../screen/departamentos/Estadio/Aseguramiento'
import { CabinaBaseball } from '../screen/departamentos/Estadio/CabinaBaseball'
import { CulturaFisica } from '../screen/departamentos/Estadio/CulturaFisica'
import { DireccionEconomiaProvincial } from '../screen/departamentos/Estadio/DireccionEconomiaProvincial'
import { DireccionEstadio } from '../screen/departamentos/Estadio/DireccionEstadio'
import { EconomiaUnidadPresupuestada } from '../screen/departamentos/Estadio/EconomiaUnidadPresupuestada'
import { Inversiones } from '../screen/departamentos/Estadio/Inversiones'
import { NodoInformatica } from '../screen/departamentos/Estadio/NodoInformatica'
import { RecursosHumanos } from '../screen/departamentos/Estadio/RecursosHumanos'
import { SalaNavegacion } from '../screen/departamentos/Estadio/SalaNavegacion'
import { SeguridadProteccion } from '../screen/departamentos/Estadio/SeguridadProteccion'
import { ActividadDeportiva } from '../screen/departamentos/Estadio/ActividadDeportiva'
import { EconomiaEstadio } from '../screen/departamentos/Estadio/EconomiaEstadio'

// polivalente 7 departamentos
import { Colaboracion } from '../screen/departamentos/Polivalente/Colaboracion'
import { ComisionCuadrosScreen } from '../screen/departamentos/Polivalente/ComisionCuadrosScreen'
import { DireccionPolivalente } from '../screen/departamentos/Polivalente/DireccionPolivalente'
import { Inspeccion } from '../screen/departamentos/Polivalente/Inspeccion'
import { Organizacion } from '../screen/departamentos/Polivalente/Organizacion'
import { SubdireccionDocencia } from '../screen/departamentos/Polivalente/SubdireccionDocencia'
import { SubdireccionPolivalente } from '../screen/departamentos/Polivalente/SubdireccionPolivalente'

// Administracion
import { CrearAdminScreen } from '../screen/CrearAdminScreen'
import { EliminarAdminScreen } from '../screen/EliminarAdminScreen'


// imprimir
import { PrintScreen } from '../screen/PrintScreen'






export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/estadistica' component={Estadistica} />
                    <Route exact path='/formEstadio' component={FormScreenEstadio} />
                    <Route exact path='/formPolivalente' component={FormScreenPolivalente} />

                    {/* Estadio */}
                    <Route exact path='/actividadDeportiva' component={ActividadDeportiva} />
                    <Route exact path='/altoRendimiento' component={AltoRendimiento} />
                    <Route exact path='/aseguramiento' component={Aseguramiento} />
                    <Route exact path='/cabinaBaseball' component={CabinaBaseball} />
                    <Route exact path='/culturaFisica' component={CulturaFisica} />
                    <Route exact path='/direccionEconomiaProvincial' component={DireccionEconomiaProvincial} />
                    <Route exact path='/direccionEstadio' component={DireccionEstadio} />
                    <Route exact path='/economiaEstadio' component={EconomiaEstadio} />
                    <Route exact path='/economiaUnidadPresupuestada' component={EconomiaUnidadPresupuestada} />
                    <Route exact path='/inversiones' component={Inversiones} />
                    <Route exact path='/nodoInformatica' component={NodoInformatica} />
                    <Route exact path='/recursosHumanos' component={RecursosHumanos} />
                    <Route exact path='/salaNavegacion' component={SalaNavegacion} />
                    <Route exact path='/seguridadProteccion' component={SeguridadProteccion} />

                    {/* Polivalente */}
                    <Route exact path='/colaboracion' component={Colaboracion} />
                    <Route exact path='/comisionCuadros' component={ComisionCuadrosScreen} />
                    <Route exact path='/direccionPolivalente' component={DireccionPolivalente} />
                    <Route exact path='/inspeccion' component={Inspeccion} />
                    <Route exact path='/organizacion' component={Organizacion} />
                    <Route exact path='/subdireccionDocencia' component={SubdireccionDocencia} />
                    <Route exact path='/subdireccionPolivalente' component={SubdireccionPolivalente} />

                    {/* Administración */}
                    <Route exact path='/crearUsuario' component={CrearAdminScreen} />
                    <Route exact path='/eliminarUsuario' component={EliminarAdminScreen} />

                    {/* Print Screen */}
                    <Route exact path='/imprimir' component={PrintScreen} />



                    <Redirect to='/estadistica' />
                </Switch>
            </div>

        </>
    )
}
