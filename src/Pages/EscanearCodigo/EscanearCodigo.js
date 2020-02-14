import React from 'react';
//Las arrow function no tienen contexto (no puedes usar)
export const EscanearCodigo = () =>(
	<main>
		<div class="row center">
            <img class="qr" src="https://images-na.ssl-images-amazon.com/images/I/41k5YQynXWL.png" alt="qr"></img>
		</div>
		<div class="row">
			<div class="col s12 input-field">
				<label for="txtcode">Ingrese Código</label>
				<input type="text" name="txtcode" id="txtcode" maxlength="10" class="validate"></input>
			</div>
		</div>
		<div class="row center">
			<a href="felicidades.html" class="waves-effect waves-light btn bg-green">Escanear Código</a>
		</div>
	</main>
)