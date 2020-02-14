import React from 'react';
import {Link} from 'react-router-dom'


export const Login = () =>(
	<main>
		<div id="login" class="container">
		<form>
					<div class="row center">
						<div class="col s12">
							<h5 class="black-text">Iniciar Sesión</h5>
						</div>
					</div>
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
							<h6 id="mensaje"></h6>
						</div>
					</div>
					<div class="row center-align">
						<div class="input-field col s12">
						  	<button id ="valida" class="btn waves-effect waves-light btnrounded bg-green" type="button">Ingresar
							<i class="material-icons right">send</i>
							</button>
						</div>
					</div>
					<div class="row pnlsignup center">
						<span class="nowsignup black-text">¿No estas registrado? <Link to="/registro" >Registrate aqui</Link></span>
					</div>
					<div class="row"></div>
				</form>
			</div>
	</main>
)
