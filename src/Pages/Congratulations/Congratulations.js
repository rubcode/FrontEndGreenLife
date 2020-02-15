import React from 'react';
import { Navbar } from '../../Components/Shared/Navbar/Navbar';
import {Link} from 'react-router-dom';
export const Congratulations = () =>(
	<main>
		<Navbar></Navbar>

		<div class="row pnlticket">
			<h3 class="center lblcongratulations">¡Felicidades!<br></br> + 20 puntos</h3>
		</div>
		<div class="row pnlbotonera">
				<div class="col s4 center">
					<Link to="/Escanear" class="btn-floating btn-large btnwhitecircle">
						<i class="large material-icons">eco</i>
					</Link>
					<h6 class="center white-text txttitlebotonera">Bonos</h6>
				</div>
				<div class="col s4 center">
					<Link to="/Socios" class="btn-floating btn-large btnwhitecircle">
						<i class="large material-icons">store</i>
					</Link>
					<h6 class="center white-text txttitlebotonera">Socios</h6>
				</div>
				<div class="col s4 center">
					<Link to="/Perfil" class="btn-floating btn-large btnwhitecircle">
						<i class="large material-icons">face</i>
					</Link>
					<h6 class="center white-text txttitlebotonera">Perfil</h6>
				</div>
			</div>
	</main>
)