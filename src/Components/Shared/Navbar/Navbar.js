import React from 'react';

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
		          <li><a href="descuentos.html">Empresas Verdes</a></li>
		          <li><a href="puntos.html">Escanear Código</a></li>
		        </ul>
		        <ul class="side-nav" id="mobile-demo">
			      <li><a href="descuentos.html">Establecimientos</a></li>
		          <li><a href="puntos.html">Escanear Código</a></li>
			    </ul>
		      </div>
		    </nav>
		  </div>
		</div>
	</div>
	</header>
)

export default Navbar;
