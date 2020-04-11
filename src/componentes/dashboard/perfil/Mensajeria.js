import React, { Fragment, useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link, withRouter } from 'react-router-dom';
import { Header, Navegacion } from '../../layout/auth'; 
import clienteAxios from '../../../config/axios';
import { CRMContext } from '../../../context/CRMContext';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import '../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ContactosTodos from './ContactosTodos';

function Mensajeria(props) {

	const [auth, guardarAuth] = useContext(CRMContext);
	const { credenciales } = auth;
	const { email } = credenciales;

	const [ clientes, guardarClientes ] = useState([]);
	const [ miembro, guardarMiembro ] = useState([]);  // miembro logueado (id)

	//Listado alfabetico
	const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const clientesConsulta = await clienteAxios.get('/clientes');
			// colocar el resultado en el state
			guardarClientes(clientesConsulta.data);
		}
		consultarAPI();
	}, [clientes, guardarAuth]);

	let id = '';

	for( let cliente of clientes ) {
		if(cliente.email === credenciales.email) { 
				id = cliente._id; // id del que estoy loguaada
		}
	}
	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const miembroConsulta = await clienteAxios.get(`/clientes/${id}`);
	            guardarMiembro(miembroConsulta.data);
	        }

	        consultarAPI();
    }, [id, miembro]);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
			<div className="wrapper  bg-light">
				<Header />
				<div className="main">
					<Navegacion />
					<div className="content">
						<div className="container-fluid">
							<div className="row mb-3">

								<div className="col-md-2 d-none d-md-block">
									
									<div className="card mb-3">
										
										<div className="list-group list-group-flush" role="tablist">

											<a className="list-group-item list-group-item-action py-0 text-center active" data-toggle="list" href="#all" role="tab">
							                    All
							                </a>
							                { alfabeto.map(letra => (
								                <a className="list-group-item list-group-item-action py-0 text-center" data-toggle="list" href={`#${letra}`} role="tab">
								                    {letra}
								                </a>
											))}
										</div>
									
									</div>

								</div>
								
								<div className="col-md-10">
											<div className="tab-content">
												
												<div className="tab-pane fade show active" id="all" role="tabpanel">
													<div className="card">
														<div className="card-header d-flex justify-content-between">
															<h6 className="card-title mb-0">
																Your contacts ({ miembro.amigos ? miembro.amigos.length : 0 }) central - All messages
															</h6>
														</div>
														<div className="card-body">
															<div className="col">
																<table className="table table-striped dataTable no-footer dtr-inline">
																	{
																		miembro.amigos ?
																			miembro.amigos.map(amigo =>(
																				<ContactosTodos
																					key = {amigo}
																					id = {amigo}
																				/>
																			)) :
																			<Loader
																				type="BallTriangle"
																				color="#38cd"
																				height={40}
																				width={40}

																			/>
																	}
																</table>
															</div>
														</div>
													</div>
												</div>
												{ alfabeto.map(letra => (
													<div className="tab-pane fade" id={`${letra}`} role="tabpanel">
														
														<div className="card">
															<div className="card-header d-flex justify-content-between">
																<h6 className="card-title mb-0">
																	{letra} List
																</h6>
															</div>
														</div>

													</div>
												))}
											</div>
										</div>

							</div>
						</div>
				    </div>
				</div>
			</div>
	)
}
export default withRouter(Mensajeria);