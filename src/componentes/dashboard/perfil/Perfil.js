import React, { Fragment, useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link, withRouter } from 'react-router-dom';
import '../Dashboard.css';
import '../../layout/auth/Header.css';
import Header from '../../layout/auth/Header';
import Navegacion from '../../layout/auth/Navegacion';
import Bienvenida from '../navbar/Bienvenida';

import clienteAxios from '../../../config/axios';
import { CRMContext } from '../../../context/CRMContext';

import moment from 'moment';

import EditarPerfil from './EditarPerfil';
import EditarSocial from './EditarSocial';
import EditarEmpleo from './EditarEmpleo';
import VerPerfil from './VerPerfil';

function Perfil(props) {

	const [auth, guardarAuth] = useContext(CRMContext);

	const { credenciales } = auth;
	const { email } = credenciales;

	const [ clientes, guardarClientes ] = useState([]);

	const [ miembros, guardarMiembros ] = useState([]);

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
	            guardarMiembros(miembroConsulta.data);
	        }

	        consultarAPI();
    }, [id, miembros]);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
		<Fragment>

			<div className="splash">
				<div className="splash-icon">
				</div>
			</div>

			<div className="wrapper  bg-light">
				<Header />
				<div className="main">
					<Navegacion />
					<div className="content">
						<div className="container-fluid">
							<div className="header">
								<Bienvenida />
							</div>
							<div className="row mb-3">

								<div className="col-md-3 col-xl-2">
									
									<div className="card">
										
										<div className="card-header">
											<h6 className="card-title mb-0 text-dark">Profile Settings</h6>
										</div>
										
										<div className="list-group list-group-flush" role="tablist">
											<a className="list-group-item list-group-item-action active" data-toggle="list" href="#account" role="tab">
							                    Account
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#social" role="tab">
							                    Social Networks
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#job" role="tab">
							                    Job
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#summary" role="tab">
							                    Summary
							                </a>
										</div>
									
									</div>

								</div>
								
								<div className="col-md-9 col-xl-10">
											<div className="tab-content">
												
												<div className="tab-pane fade show active" id="account" role="tabpanel">
													
													<div className="card">
														<div className="card-header d-flex justify-content-between">
															<h6 className="card-title mb-0">
																Public profile
															</h6>
															<h6 className="text-primary">
																Member since  {moment(`${miembros.registro}`).format('l')}
															</h6>
														</div>
														<EditarPerfil
															miembros={miembros}
														/>
													</div>

												</div>

												<div className="tab-pane fade" id="social" role="tabpanel">
													
													<div className="card">
														<div className="card-header d-flex justify-content-between">
															<h6 className="card-title mb-0">
																Social Networks
															</h6>
														</div>
														<EditarSocial
															miembros={miembros}
														/>
													</div>

												</div>

												<div className="tab-pane fade" id="job" role="tabpanel">
													
													<div className="card">
														<div className="card-header d-flex justify-content-between">
															<h6 className="card-title mb-0">
																Job Profile
															</h6>
														</div>
														<EditarEmpleo
															miembros={miembros}
														/>
													</div>

												</div>

												<div className="tab-pane fade" id="summary" role="tabpanel">
													
													<div className="card">
														<div className="card-header">
															<h6 className="card-title mb-0">
																Summary
															</h6>
															<p><small className="text-muted">How your profile is shown to other members in search section</small></p>
															<hr />
														</div>
														<VerPerfil
															miembros={miembros}
														/>
													</div>

												</div>

											</div>
										</div>

							</div>
						</div>
				    </div>
				</div>
			</div>

	    	<div className="redux-toastr" aria-live="assertive">
				<div>
					<div className="top-left">
					</div>
					<div className="top-right">
					</div>
					<div className="top-center">
					</div>
					<div className="bottom-left">
					</div>
					<div className="bottom-right">
					</div>
					<div className="bottom-center">
					</div>
				</div>
			</div>		

		</Fragment>
	)
}
export default withRouter(Perfil);