import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
export const Socios = () =>(
	<main>
		<Navbar></Navbar>
		<div class="container">
			<div class="row">
				<h4 class="center">Socios Verdes</h4>
			</div>
			<div class="row">
				<div class="col s6 m4 l3 cardsocio">
					<div class="imgdescuento hm">
						
					</div>
					<p class="myparrafo">Viste con estilo y ayuda al planeta con nuestra verde. Obten 40 puntos por compra</p>
				</div>
				<div class="col s6 m4 l3 cardsocio">
					<div class="imgdescuento bsk">
						
					</div>
					<p class="myparrafo">¡Se parte de los cambiamos el mundo! Obten 20 punto en la compra de prendas sustentables</p>
				</div>
				<div class="col s6 m4 l3 cardsocio">
					<div class="imgdescuento che">
						
					</div>
					<p class="myparrafo">En cherraui cuesta menos si traes tus tuppers y bolsas. Obten 20 puntos por vista</p>
				</div>
				<div class="col s6 m4 l3 cardsocio">
					<div class="imgdescuento cie">
						
					</div>
					<p class="myparrafo">¡Pa salvar el planeta! Trae tu terno y obten 20 puntos en cada visita</p>
				</div>
			</div>
			<div class="row">
				<div class="col s6 m4 l3 cardsocio">
					<div class="imgdescuento sta">
						
					</div>
					<p class="myparrafo">Trae tu terno y ayudanos a cuidar el medio ambiente. Obten 10 puntos por cada bebida</p>
				</div>
				<div class="col s6 m4 l3 cardsocio">
					<div class="imgdescuento bod">
						
					</div>
					<p class="myparrafo">¡Cuida el ambiente como Mamá Lucha! Obten 30 puntos en la compra de producto sustentables</p>
				</div>
				<div class="col s6 m4 l3 cardsocio">
					<div class="imgdescuento cin">
						
					</div>
					<p class="myparrafo">Trae tus tuppers y Cinepolis te regala 30 puntos en la compra de un combo amigos</p>
				</div>
				<div class="col s6 m4 l3 cardsocio">
					<div class="imgdescuento sha">
						
					</div>
					<p class="myparrafo">Ponte green con la nueva linea sustentable y obten 30 puntos en la compra de una prenda. </p>
				</div>
			</div>
		</div>
		<div class="fixed-action-btn toolbar">
		    <Link to="/Escanear" class="btn-floating btn-large bg-green">
		      <i class="large material-icons">center_focus_strong</i>
		    </Link>
		</div>
	</main>
)