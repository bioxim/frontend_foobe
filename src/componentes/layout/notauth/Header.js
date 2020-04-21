import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { CRMContext } from '../../../context/CRMContext';

import './addons/noauth.css';

import { Estadisticas } from '../../dashboard';

const Header = (props) => {

	const [auth, guardarAuth] = useContext(CRMContext);

	const cerrarSesion = () =>{
		// auth.auth = false y el token se remueve
		guardarAuth({
			token: '',
			auth: false
		});

		localStorage.setItem('token', '');

		// redireccionar
		props.history.push('/');
	}

	const guardarIdioma = () => {
		localStorage.setItem('button', 'esp');
		window.location.reload(true);
	}

	const volverOriginal = () => {
		localStorage.removeItem('button', 'esp');
		window.location.reload(true);
		
	}

	return (
		<header>
	        <nav className="navbar navbar-expand-lg navbar-light bg-white">
		      <div className="container">
		        <Link to={"/"} className="navbar-brand">
		          <img src="img/foobe.png" className="navbar-brand-img img-fluid logo" alt="foobe community logo"/>
		        </Link>
		        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="navbar-collapse collapse" id="navbarCollapse">
		        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		           <i className="fas fa-times"></i>
		         </button>
		          <ul className="navbar-nav ml-auto">
		            <li className="nav-item dropdown hovered">
		              <Link to={"/events"} className="nav-link font-weight-bold" id="navbarLandings">
		                { !localStorage.getItem('button', 'esp') ? 'Tradeshows' : 'Ferias' }
		              </Link>
		            </li>
		            { auth.auth ? (
		            <li className="nav-item dropdown hovered">
		              <Link to={"/dashboard"} className="nav-link font-weight-bold text-primary" id="navbarLandings">
		                { !localStorage.getItem('button', 'esp') ? 'Community' : 'Comunidad' }
		              </Link>
		            </li>
		            ) : (
		            	<li className="nav-item dropdown hovered">
		              <Link to={"/login"} className="nav-link font-weight-bold" id="navbarLandings">
		                { !localStorage.getItem('button', 'esp') ? 'Community' : 'Comunidad' }
		              </Link>
		            </li>
		            )}
		            { auth.auth ? null : (
		            	<li className="nav-item dropdown hovered">
		              <Link to={"/data"} className="nav-link font-weight-bold" id="navbarLandings">
		                { !localStorage.getItem('button', 'esp') ? 'Database' : 'Productores' }
		              </Link>
		            </li>
		            )}
		            <li className="nav-item dropdown hovered">
		              <Link to={"/contact-details"} className="nav-link font-weight-bold" id="navbarDocumentation">
		                { !localStorage.getItem('button', 'esp') ? 'Support' : 'Soporte' }
		              </Link>
		            </li>
		            <li className="nav-item dropdown hovered">
		              	{ !localStorage.getItem('button', 'esp') ?
			              <button 
			              	className="navbar-btn btn btn-outline-warning ml-auto text-uppercase" 
			              	onClick={guardarIdioma}
			              >
			              	ESP
			              </button> : 
						  <button 
			              	className="navbar-btn btn btn-outline-dark ml-auto text-uppercase"
			              	onClick={volverOriginal}
			              >
			              	ENG
			              </button> }
		            </li>
		          </ul>
		         { !auth.auth ? (
					<Fragment>
						<Link to={"/login"} className="navbar-btn btn btn-success ml-auto text-uppercase">
			              <i className="fas fa-sign-in-alt"></i> { !localStorage.getItem('button', 'esp') ? 'Log-In' : 'Iniciar Sesión' }
			            </Link>
				        <Link to={"/buy-now"} className="navbar-btn btn btn-primary ml-auto text-uppercase margen">
				           <i className="fas fa-shopping-cart"></i> { !localStorage.getItem('button', 'esp') ? 'Be a Member' : 'Sea Miembro' }
				        </Link>
					</Fragment>
		         ) : null }
		        { auth.auth ? (
						<button
		            		type="button"
		            		className="navbar-btn btn btn-danger ml-auto margen"
		            		onClick={cerrarSesion}
		            	>
		            		<i className="mr-2 fas fa-times"></i> 
		            		{ !localStorage.getItem('button', 'esp') ? 'Sign Out' : 'Cerrar Sesión' }
		            	</button>
					) : null }
		        </div>
		      </div>
		  </nav>
		  <div className="pr-3">
		  	<Estadisticas />
		  </div>
	    </header>

	)
}
 export default withRouter(Header); 