import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { CRMContext } from '../../../context/CRMContext';
import clienteAxios from '../../../config/axios';

const Header = (props) => {

	const [auth, guardarAuth] = useContext(CRMContext);
	
	const { credenciales } = auth;
	const { email } = credenciales;

	const [ clientes, guardarClientes ] = useState([]);
	const [miembro, guardarMiembro] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const clientesConsulta = await clienteAxios.get('/clientes');
			// colocar el resultado en el state
			guardarClientes(clientesConsulta.data);
		}
		consultarAPI();
	}, [clientes, guardarAuth]);

	const clienteId = clientes.map(
		cliente => (
			(cliente.email === email) ? cliente._id : ''
		));

	const id = clienteId.filter(Boolean);

	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const miembroConsulta = await clienteAxios.get(`/clientes/${id}`);
	            guardarMiembro(miembroConsulta.data);
	        }

	        consultarAPI();
    }, [id, miembro]);

	const { nombre, tagline, imagen } = miembro;

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
		<nav className="sidebar collapse toggled2" id="collapseExample" >
		<div className="sidebar-content">
			<Link to={"/dashboard"} className="sidebar-brand d-none d-sm-block"> 
				<span className="align-middle">Foobe App</span> 
			</Link>
			<div className="sidebar-user">
				{ imagen ? <img src={`${process.env.REACT_APP_BACKEND_URL}/${imagen}`} className="img-fluid rounded-circle" width="400" alt={nombre} /> : <img src="/img/avatar-static.jpg" className="img-fluid rounded-circle" width="400" alt={nombre} />  }
				<div className="font-weight-bold">
					{nombre ? nombre : null }
				</div>
				<small>
					{tagline ? tagline : 'Foobes Member' }
				</small>
			</div>
			<ul className="sidebar-nav">
				<li className="sidebar-header">
					Main
				</li>
				<li className="sidebar-item">
					<Link to={"/dashboard"} className="sidebar-link">
						<i className="fas fa-home"></i>
						<span className="align-middle">
							Dashboard
						</span> 
					</Link>
				</li>
				<li className="sidebar-header">
					Books and downloads
				</li>
				<li className="sidebar-item">
					<span data-toggle="collapse" className="sidebar-link" href="#collapseExample2" role="button" aria-expanded="true">
						<i className="fas fa-sd-card"></i>
						<span className="align-middle">
							Book of Tradeshows
						</span>
					</span>
					<div className="collapse" id="collapseExample2" aria-expanded="true">
						<ul id="item" className="sidebar-dropdown list-unstyled">
							<li className="sidebar-item ">
								<Link to={"/books-cards"} className="sidebar-link">
									Books
								</Link>
							</li>
							<li className="sidebar-item ">
								<Link to={"/all-cards"} className="sidebar-link">
									Cards - by name
								</Link>
							</li>
							<li className="sidebar-item ">
								<Link to={"/all-cards-countries"} className="sidebar-link">
									Cards - by country
								</Link>
							</li>
							<li className="sidebar-item ">
								<Link to={"/all-cards-emails"} className="sidebar-link">
									Cards - by email
								</Link>
							</li>
						</ul>
					</div>
				</li>
				<li className="sidebar-item">
					<span data-toggle="collapse" className="sidebar-link" href="#collapseExample3" role="button" aria-expanded="true">
						<i class="fas fa-download"></i>
						<span className="align-middle">
							Producers Lists
						</span>
					</span>
					<div className="collapse" id="collapseExample3" aria-expanded="true">
						<ul id="item" className="sidebar-dropdown list-unstyled">
							<li className="sidebar-item ">
								<Link to={"/list"} className="sidebar-link">
									All Books
								</Link>
							</li>
							<li className="sidebar-item ">
								<Link to={"/list-countries"} className="sidebar-link">
									Books - by country
								</Link>
							</li>
							<li className="sidebar-item ">
								<Link to={"/list-products"} className="sidebar-link">
									Books - by products
								</Link>
							</li>
						</ul>
					</div>
				</li>
				<li className="sidebar-header">
					Users
				</li>
				<li className="sidebar-item ">
					<span data-toggle="collapse" className="sidebar-link" href="#collapseExample4" role="button" aria-expanded="true">
						<i className="fas fa-users"></i>
						<span className="align-middle">
							Profiles
						</span>
					</span>
					<div className="collapse" id="collapseExample4" aria-expanded="true">
						<ul id="item" className="sidebar-dropdown list-unstyled">
							<li className="sidebar-item ">
								<Link to={"/users-all"} className="sidebar-link">
									By Work Activity
								</Link>
							</li>
							<li className="sidebar-item ">
								<Link to={"/users-profile"} className="sidebar-link">
									By Company
								</Link>
							</li>
							<li className="sidebar-item ">
								<Link to={"/users-country"} className="sidebar-link">
									By Country
								</Link>
							</li>
						</ul>
					</div>
				</li>
				<li className="sidebar-header">
					Market tools
				</li>
				<li className="sidebar-item ">
					<span data-toggle="collapse" className="sidebar-link" href="#collapseExample5" role="button" aria-expanded="true">
						<i class="fas fa-file-contract"></i>
						<span className="align-middle">
							Future Contracts
						</span>
					</span>
					<div className="collapse" id="collapseExample5" aria-expanded="true">
						<ul id="item" className="sidebar-dropdown list-unstyled">
							<li className="sidebar-item ">
								<Link to={"/wiki/continuousfutures"} className="sidebar-link">
									WIKI Continuous Futures
								</Link>
								<Link to={"/eurex/futures"} className="sidebar-link">
									EUREX Futures
								</Link>
								<Link to={"/dalian"} className="sidebar-link">
									DALIAN Commodities
								</Link>
							</li>
						</ul>
					</div>
				</li>
				<li className="sidebar-header">
					Finantial tools
				</li>
				<li className="sidebar-item ">
					<span data-toggle="collapse" className="sidebar-link" href="#collapseExample6" role="button" aria-expanded="true">
						<i class="fas fa-money-check-alt"></i>
						<span className="align-middle">
							Finantial
						</span>
					</span>
					<div className="collapse" id="collapseExample6" aria-expanded="true">
						<ul id="item" className="sidebar-dropdown list-unstyled">
							<li className="sidebar-item ">
								<Link to={"/currencies"} className="sidebar-link">
									Currency converter
								</Link>
							</li>
							<li className="sidebar-item ">
								<Link to={"/calculator/graphics"} className="sidebar-link">
									Calculator
								</Link>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</nav>
	)
}

export default Header;
