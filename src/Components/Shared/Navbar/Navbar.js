import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ()=>(
	<header>
	<div class="mynav">
		<div class="navbar-fixed">
		    <div class="navbar-fixed">
		    <nav class="bg-green mynav">
		      <div class="nav-wrapper">
		        <Link to="/Perfil" class="brand-logo">Greenlife</Link>
		        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		        <ul class="right hide-on-med-and-down">
				  <li><Link to="/Perfil"><i class="material-icons left">face</i>Perfil</Link></li>
		          <li><Link to="/Socios"><i class="material-icons left">store</i>Empresas Verdes</Link></li>
		          <li><Link to="/Escanear"><i class="material-icons left">center_focus_strong</i>Escanear Código</Link></li>
		        </ul>
		        <ul class="side-nav" id="mobile-demo">
				  <li><Link to="/Perfil"><i class="material-icons left">face</i>Perfil</Link></li>
				  <li><Link to="/Socios"><i class="material-icons left">store</i>Empresas Verdes</Link></li>
		          <li><Link to="/Escanear"><i class="material-icons left">center_focus_strong</i>Escanear Código</Link></li>
			    </ul>
		      </div>
		    </nav>
		  </div>
		</div>
	</div>
	</header>
)

export default Navbar;
