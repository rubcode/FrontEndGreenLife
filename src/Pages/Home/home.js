import React from 'react';
import { Navbar } from '../../Components/Shared/Navbar/Navbar';
//Las arrow function no tienen contexto (no puedes usar)
export const HomePage = () =>(
		<main>
		<div class="container">
			<div class="row center">
			</div>
			<div class="row">
				<h5 class="center">Rubén Daniel Rivero</h5>
			</div>
			<div class="row">
				<h6 class="center">Puntos: 85</h6>
			</div>
			<div class="row center">
				<a href="puntos.html" class="waves-effect waves-light btn bg-green">Ganar Puntos</a>
			</div>
		</div>
		</main>
)