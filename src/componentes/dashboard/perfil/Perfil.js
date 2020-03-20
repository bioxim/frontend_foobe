import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../Dashboard.css';
import '../../layout/auth/Header.css';
import Header from '../../layout/auth/Header';
import Navegacion from '../../layout/auth/Navegacion';
import Bienvenida from '../navbar/Bienvenida';

import clienteAxios from '../../../config/axios';
import { CRMContext } from '../../../context/CRMContext';

import moment from 'moment';

const Perfil = (props) => {

	const [auth, guardarAuth] = useContext(CRMContext);

	const { credenciales } = auth;
	const { email } = credenciales;

	const [ clientes, guardarClientes ] = useState([]);

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

	const [miembro, guardarMiembro] = useState({
		nombre: '',
		tagline: '',
		imagen: ''
	});

	const [archivo, guardarArchivo] = useState('');

	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const miembroConsulta = await clienteAxios.get(`/clientes/${id}`);
	            guardarMiembro(miembroConsulta.data);
	        }

	        consultarAPI();
    }, [id]);

    const { nombre, tagline, imagen, registro } = miembro;

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
																Member since  {moment(`${registro}`).format('l')}
															</h6>
														</div>
														<div className="card-body">
															<form>
																<div className="row">
																	<div className="col-md-8">
																		<div className="form-group">
																			<label>Full Name</label>
																			<input 
																				name="nombre"
																				type="text" 
																				className="form-control" 
																				placeholder="Your full name"
																				defaultValue={nombre}
																			/>
																		</div>
																		<div class="form-group">
																			<label> Business Tagline</label>
																			<input 
																				name="tagline"
																				type="text" 
																				className="form-control" 
																				placeholder="Your job"
																				defaultValue={tagline}
																			/>
																		</div>
																	</div>
																	<div className="col-md-4">
																		<div className="text-center">
																			{ imagen ? (
														                        <img src={`${process.env.REACT_APP_BACKEND_URL}/${imagen}`} alt="imagen" width="150" className="img-fluid rounded-circle" />
														                    ) : null }
																			<div class="mt-2">
																				<input 
															                        type="file"  
															                        name="imagen"
															                    />
																			</div>
																			<small>For best results, use an square image .jpg or .png
				                                            format</small>
																		</div>
																	</div>
																</div>

																<button type="submit" class="btn btn-primary">Save changes</button>
															</form>

														</div>
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