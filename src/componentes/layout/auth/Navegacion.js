import React from 'react';

import './Header.css';
import Mensajes from '../../dashboard/navbar/Mensajes';
import Settings from '../../dashboard/navbar/Settings';

const Navegacion = (props) => (
	<nav className="navbar-theme navbar navbar-expand">
		<span className="sidebar-toggle d-flex mr-2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
			<i className="hamburger align-self-center"></i>
		</span>
		<form className="form-inline d-none d-sm-block">
			
		</form>
		<div className="collapse navbar-collapse" aria-expanded="false">
			<ul className="ml-auto navbar-nav">
				<Mensajes />
				<Settings />
			</ul>
		</div>
	</nav>
)

export default Navegacion;