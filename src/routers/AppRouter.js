import React from 'react'

import { EconomiaScreen } from '../screen/EconomiaScreen'
import { InformaticaScreen } from '../screen/InformaticaScreen'
import { DireccionScreen } from '../screen/DireccionScreen'
import { RecursosHumanosScreen } from '../screen/RecursosHumanosScreen'
import { ComisionCuadrosScreen } from '../screen/ComisionCuadrosScreen'
import { CVPScreen } from '../screen/CVPScreen'

import { LoginScreen } from '../screen/LoginScreen'

import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import { Navbar } from '../ui/Navbar';
import { Form } from '../components/Form'



export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/login' component={LoginScreen} />

                    <Route exact path='/' component={Form} />
                    <Route exact path='/informatica' component={InformaticaScreen} />
                    <Route exact path='/economia' component={EconomiaScreen} />
                    <Route exact path='/direccion' component={DireccionScreen} />
                    <Route exact path='/cvp' component={CVPScreen} />
                    <Route exact path='/comision' component={ComisionCuadrosScreen} />
                    <Route exact path='/rrhh' component={RecursosHumanosScreen} />

                </Switch>
            </Router>

        </div>
    )
}
