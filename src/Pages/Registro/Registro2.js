import React from 'react';
import {Link} from 'react-router-dom';


export const Registro = () =>(
		
		<main>
            <div class="row">
				<div class="col s12 center bannergreen">
					<h4 class="white-text">¡Regístrate!</h4>
				</div>
			</div>
            <div class="container pink-text text-darken-2">
				<form>
					<div class="row">
						<div class="input-field col l12 m12 s12">
							<input id="txtnombre" type="text" class="validate" name="txtnombre" placeholder="Nombre"></input>
							<label for="nombre">Nombre</label>
						</div>
						<div class="input-field col l6 m6 s12">
							<input id="txtedad" type="text" class="validate" name="txtedad" placeholder="Edad"></input>
							<label for="txtedad">Edad</label>
						</div>
						<div class="input-field col l6 m6 s12">
							<input id="email" type="email" class="validate" name="email" placeholder="Email"></input>
							<label for="email">Email</label>
						</div>
						<div class="input-field col l6 m6 s12">
							<input id="contrasena" type="password" class="validate" name="contrasena" placeholder="Contraseña"></input>
							<label for="contrasena">Contraseña</label>
						</div>
						<div class="input-field col l6 m6 s12">
							<input id="repetir" type="password" class="validate" name="repetir" placeholder="Repetir Contraseña"></input>
							<label for="repetir">Repetir Contraseña</label>
						</div>
						<div class="input-field col s12 center">
							<Link to="/Login" id ="btnregistrate" class="btn waves-effect waves-light btnrounded bg-green" type="button" >Ingresar
							</Link>
						</div>
					</div>
				</form>				
		</div>
		</main>
)