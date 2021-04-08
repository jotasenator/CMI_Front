import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { ComisionCuadrosScreen } from '../../src/screen/departamentos/ComisionCuadrosScreen'
import { CVPScreen } from '../../src/screen/departamentos/CVPScreen'
import { DireccionScreen } from '../../src/screen/departamentos/DireccionScreen'
import { EconomiaScreen } from '../../src/screen/departamentos/EconomiaScreen'
import { FormScreen } from '../screen/FormScreen'
import { InformaticaScreen } from '../../src/screen/departamentos/InformaticaScreen'
import { RecursosHumanosScreen } from '../../src/screen/departamentos/RecursosHumanosScreen'
import { Navbar } from '../ui/Navbar'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/form' component={FormScreen} />

                    <Route exact path='/informatica' component={InformaticaScreen} />
                    <Route exact path='/economia' component={EconomiaScreen} />
                    <Route exact path='/direccion' component={DireccionScreen} />
                    <Route exact path='/cvp' component={CVPScreen} />
                    <Route exact path='/comision' component={ComisionCuadrosScreen} />
                    <Route exact path='/rrhh' component={RecursosHumanosScreen} />

                    <Redirect to='/form' />
                </Switch>
            </div>

        </>
    )
}
