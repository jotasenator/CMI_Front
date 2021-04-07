import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { ComisionCuadrosScreen } from '../screen/ComisionCuadrosScreen'
import { CVPScreen } from '../screen/CVPScreen'
import { DireccionScreen } from '../screen/DireccionScreen'
import { EconomiaScreen } from '../screen/EconomiaScreen'
import { FormScreen } from '../screen/FormScreen'
import { InformaticaScreen } from '../screen/InformaticaScreen'
import { RecursosHumanosScreen } from '../screen/RecursosHumanosScreen'
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
