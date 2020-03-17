import React from 'react';
import { Link } from 'react-router-dom';

import '../../layout/auth/Header.css';

const Mensajes = () => (
	<li className="ml-lg-1 active dropdown nav-item">
		<Link to={"/messages"} className="dropdown-toggle nav-link text-white">
			<i className="fas fa-envelope-open"></i>
		</Link>
	</li>
)

export default Mensajes;