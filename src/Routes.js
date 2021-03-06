import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { HomePage } from './Pages/Home/home.js';
import { EscanearCodigo } from './Pages/EscanearCodigo/EscanearCodigo.js';
import { Congratulations } from './Pages/Congratulations/Congratulations.js';
import { Socios } from './Pages/Socios/Socios.js'

import { Registro } from './Pages/Registro/UserUploader';
import { Login } from './Pages/Login/login.js';
// import { Registro } from './Pages/Registro/Registro.js';
import { Inicio} from './Pages/Inicio/Inicio.js'
const Routes = () =>{
    return(
        <Switch>
           <Route exact path='/' component= {Inicio} />
           <Route exact path='/Login' component= {Login} />
           <Route exact path='/Perfil' component= {HomePage} />
           <Route exact path='/Escanear' component= {EscanearCodigo} />
           <Route exact path='/Felicidades' component= {Congratulations} />
           <Route exact path='/Socios' component= {Socios} />
           <Route exact path='/Registro' component= {Registro} />
        </Switch>
    )
}

export default Routes;