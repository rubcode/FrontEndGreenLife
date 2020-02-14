import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from '../../Components/Shared/Navbar/Navbar';


export const EscanearCodigo = () =>(
	<main>
		<Navbar></Navbar>
		<div class="row center">
            <img class="qr" src="https://images-na.ssl-images-amazon.com/images/I/41k5YQynXWL.png" alt="qr"></img>
		</div>
		<div class="row">
			<div class="col s12 m8 l4 offset-l4 offset-m2  input-field">
				<label for="txtcode">Ingrese Código</label>
				<input type="text" name="txtcode" id="txtcode" maxlength="10" class="validate"></input>
			</div>
		</div>
		<div class="row center">
			<Link to="/Felicidades" class="waves-effect waves-light btn bg-green">Escanear Código</Link>
		</div>
	</main>
)