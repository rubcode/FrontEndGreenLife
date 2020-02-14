import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { HomePage } from './Pages/Home/home.js';
import { EscanearCodigo } from './Pages/EscanearCodigo/EscanearCodigo.js';
const Routes = () =>{
    return(
        <Switch>
           <Route exact path='/' component= {HomePage} />
           <Route exact path='/Escanear' component= {EscanearCodigo} />
        </Switch>
    )
}

export default Routes;