import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from '../../Components/Shared/Navbar/Navbar';


export const HomePage = () =>(
		
		<main>
		<Navbar></Navbar>
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
				<Link to="/Escanear" class="waves-effect waves-light btn bg-green">Ganar Puntos</Link>
			</div>
		</div>
		</main>
)