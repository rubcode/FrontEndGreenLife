import React from 'react';
import {Link} from 'react-router-dom';


export const Inicio = () =>(
		
	<main>
        <div class="row pnlheaders center">
            <div class="pnlwhitepnlimg">
                <img class="imglogo" alt="Greenlife" src="http://www.rubrivero.com/img_green/logo.png"></img>
            </div>
        </div>
        <div class="container">
            <div class="row center">
                <Link to="/Registro" class="btn btnrounded bg-green">Registrate</Link>
            </div>
            <div class="row center">
            <Link to="/Login" class="btn btnrounded btnwhite">Inicia Sesión</Link>
            </div>
        </div>
	</main>
)