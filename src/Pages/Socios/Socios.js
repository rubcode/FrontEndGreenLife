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
			<div class="row center">
				<div class="circle">
					
				</div>
				<div class="circle">
					
				</div>
				<div class="circle">
					
				</div>
				<div class="circle">
					
				</div>
				<div class="circle">
					
				</div>
			</div>
			<div class="row">
				<div class="col s6 m4 l3">
					<div class="imgdescuento">
						
					</div>
					<p class="myparrafo">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
				</div>
				<div class="col s6 m4 l3">
					<div class="imgdescuento">
						
					</div>
					<p class="myparrafo">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
				</div>
				<div class="col s6 m4 l3">
					<div class="imgdescuento">
						
					</div>
					<p class="myparrafo">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
				</div>
				<div class="col s6 m4 l3">
					<div class="imgdescuento">
						
					</div>
					<p class="myparrafo">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
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