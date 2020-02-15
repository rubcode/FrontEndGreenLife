import React from 'react';
import {Link} from 'react-router-dom'


export const Login = () =>(
	<main>
		<div class ="row pnlheaders mgtop">
			<div class="col s12">
				<h4 class="white-text center lbltitle">Iniciar Sesión</h4>
			</div>
		</div>
		<div  class="container">
			<form>
				<div class="row">
					<div class="input-field col s10 offset-s1">
						<i class="material-icons prefix">perm_identity</i>
						<input id="usuario" type="text" class="validate" name="user"></input>
						<label for="usuario">Usuario</label>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s10 offset-s1">
						<i class="material-icons prefix">lock_outline</i>
						<input id="password" type="password" class="validate" name="pass"></input>
						<label for="password">Contraseña</label>
					</div>
				</div>
				<div class="row center-align">
					<div class="input-field col s12">
						<Link to="/Perfil" class="btn btnrounded bg-green">Ingresar</Link>
					</div>
				</div>
			</form>
		</div>
	</main>
)
