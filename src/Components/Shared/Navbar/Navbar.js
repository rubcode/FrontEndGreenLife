import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ()=>(
	<header>
	<div class="mynav">
		<div class="navbar-fixed">
		    <div class="navbar-fixed">
		    <nav class="bg-green mynav">
		      <div class="nav-wrapper">
		        <a href="index.html" class="brand-logo">Greenlife</a>
		        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		        <ul class="right hide-on-med-and-down">
		          <li><Link to="/Socios">Empresas Verdes</Link></li>
		          <li><Link to="/Escanear">Escanear Código</Link></li>
		        </ul>
		        <ul class="side-nav" id="mobile-demo">
				  <li><Link to="/Socios">Empresas Verdes</Link></li>
		          <li><Link to="/Escanear">Escanear Código</Link></li>
			    </ul>
		      </div>
		    </nav>
		  </div>
		</div>
	</div>
	</header>
)

export default Navbar;
