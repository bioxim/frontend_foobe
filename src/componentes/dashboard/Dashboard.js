import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import './Dashboard.css';
import '../layout/auth/Header.css';
import Header from '../layout/auth/Header';
import Navegacion from '../layout/auth/Navegacion';
import Bienvenida from './navbar/Bienvenida';
import moment from 'moment';

import Currenciesw from './Currenciesw';
import Estadisticas from './Estadisticas';

// importar el Context
import { CRMContext } from '../../context/CRMContext';

const Dashboard = (props) => {

	// utilizar valores del context
	const [auth, guardarAuth] = useContext(CRMContext);

	const [ eventos, guardarEventos ] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//console.log('Consultando...');
		const eventosConsulta = await clienteAxios.get('/calendarios');
			guardarEventos(eventosConsulta.data);
		}
		consultarAPI();
	}, [eventos, guardarAuth]);


	if(!auth.auth) {
		props.history.push('/login');
	}
	
	return (
			<div className="wrapper">
				<Header />
				<div className="main">
					<Navegacion />
					<div className="content">
						<div className="container-fluid">
							<div className="header">
								<Bienvenida />
							</div>
							<div className="row mb-3">
								<div className="d-flex col-12 col-md-4">
									<div className="card flex-fill w-100 mb-6 mb-xl-0 pt-14 overlayx overlay-blackx overlay-30x bg-coverx shadow-light-lg background-tarjetas-image">
								        <div className="py-5">
								            <Link className="card-meta btn" to={"/all-cards"}>
										        <h5 className="text-uppercase py-3 text-white mr-2 mb-0">
										            All the business cards
										        </h5>
										    </Link>
								        </div>
								    </div>
								</div>
								<div className="d-flex col-12 col-md-4">
									<div className="card flex-fill w-100 mb-6 mb-xl-0 pt-14 overlayx overlay-blackx overlay-30x bg-coverx shadow-light-lg background-libros-image">
								        <div className="py-5">
								            <Link className="card-meta btn" to={"/list"}>
										        <h5 className="text-uppercase py-3 text-white mr-2 mb-0">
										            All the magazines delivered
										        </h5>
										    </Link>
								        </div>
								    </div>
								</div>							
							</div>
							
							<div className="row mb-3">
								<div className="d-flex col-12">
									<div className="flex-fill w-100">
										<div className="w-100">
											<h4 className=" px-3 pt-5 text-dark text-uppercase">
												Next events calendar
											</h4>
											<hr className="border-gray-300 my-6" />
											<h6>This is our schedule of events in which foobe plans their participation. If you want us to promote your products, do not hesitate to 
												<Link className="text-primary font-italic text-uppercase px-1" to={"/contact-details"} target="_blanck">
													contact us
												</Link>
												. We will have a booth and we will also distribute a magazine with all the technical information of your products at very low cost.
											</h6>
										</div>
									</div>
								</div>					
							</div>

							<div className="row">
								{eventos.map(evento => (
									<div className="col-12 col-md-6 col-lg-4">
										<div className="card py-3">
											<img className="card-img-topx" src={`${process.env.REACT_APP_BACKEND_URL}/${evento.imagen}`} alt={evento.nombre} />
											<div className="card-header">
												<h5 className="card-title display-5 text-dark text-uppercase mb-0">{evento.nombre} {moment(`${evento.fechainicial}`).format('YYYY')}</h5>
											</div>
											<ul className="list-group list-group-flush">
												<li className="list-group-item">
													<p className="text-muted text-uppercase">
														<span className="text-dark">From </span> {moment(`${evento.fechainicial}`).format('MMMM Do YYYY')} <span className="text-dark">to</span> {moment(`${evento.fechafin}`).format('MMMM Do YYYY')}
													</p>
													<p className="text-dark text-uppercase">
														Address
													</p>
													<p className="text-muted">
														{evento.direccion}, {evento.pais}
													</p>
												</li>
											</ul>
										</div>
									</div>
								))}
							</div>
							
							<Currenciesw />

							<Estadisticas />
							
						</div>
					</div>
				</div>
			</div>
	)
}

export default Dashboard;