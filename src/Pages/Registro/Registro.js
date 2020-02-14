import React from 'react';


export const Registro = () =>(
		
		<main>
            <div id="pnlregistro" class="container pink-text text-darken-2">
				<form>
					<div class="row">
						<div class="input-field col s12 center">
							<h5 class="pink-text text-darken-2">¡Regístrate!</h5>
						</div>
					</div>
					<div class="row">
						<div class="input-field col l12 m12 s12">
							<input id="txtnombre" type="text" class="validate" name="txtnombre" placeholder="Nombre"></input>
							<label for="nombre">Nombre</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col l6 m6 s12">
							<input id="txtedad" type="text" class="validate" name="txtedad" placeholder="Edad" maxlength="10"></input>
							<label for="telefono">Télefono</label>
						</div>
						<div class="input-field col l6 m6 s12">
							<input id="email" type="email" class="validate" name="email" placeholder="Email"></input>
							<label for="email">Email</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col l6 m6 s12">
							<input id="contrasena" type="password" class="validate" name="contrasena" placeholder="Contraseña"></input>
							<label for="contrasena">Contraseña</label>
						</div>
						<div class="input-field col l6 m6 s12">
							<input id="repetir" type="password" class="validate" name="repetir" placeholder="Repetir Contraseña"></input>
							<label for="repetir">Repetir Contraseña</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s12 center">
							<button id ="registrate" class="btn waves-effect waves-light btnrounded" type="button" name="registra">Ingresar
							<i class="material-icons right">send</i>
							</button>
						</div>
					</div>
				</form>				
		</div>
		</main>
)