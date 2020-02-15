import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from '../../Components/Shared/Navbar/Navbar';


export const HomePage = () =>(
		
		<main>
			<Navbar></Navbar>
			<div class="row center">
				<div class="bg-green pnlimgprofile">
					<img class="imgprofile" src="http://www.rubrivero.com/img_green/user.png" alt="Profile"></img>
				</div>
			</div>
			<div class="row">
				<div class="row">
					<h4 class="center">Rubén Daniel Rivero</h4>
				</div>
				<div class="row">
					<div class="col s4 center">
						<i class="material-icons">eco</i>
						<h6 class="center">10</h6>
						<h6 class="center">Acciones Verdes</h6>
					</div>
					<div class="col s4 center">
						<i class="material-icons">local_activity</i>
						<h6 class="center">85</h6>
						<h6 class="center">Puntos</h6>
					</div>
					<div class="col s4 center">
						<i class="material-icons">money</i>
						<h6 class="center">$100.00</h6>
						<h6 class="center">Ahorro</h6>
					</div>
				</div>
				{/* <div class="row center">
					<Link to="/Escanear" class="btn btnrounded bg-green">Ganar Puntos</Link>
				</div> */}
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