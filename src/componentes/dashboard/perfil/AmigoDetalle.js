import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header, Navegacion } from '../../layout/auth';
import clienteAxios from '../../../config/axios';

import { CRMContext } from '../../../context/CRMContext';

import Loader from 'react-loader-spinner';
import '../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const AmigoDetalle = (props) => {

	const { id } = props.match.params;

	const [auth, guardarAuth] = useContext(CRMContext);

	if(!auth.auth) {
		props.history.push('/login');
	}

	const [ amigo, guardarAmigo ] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const amigoConsulta = await clienteAxios.get(`/clientes/${id}`);
			// colocar el resultado en el state
			guardarAmigo(amigoConsulta.data);
		}
		consultarAPI();

	}, [id, amigo]);
	
	return (
		<div className="wrapper  bg-light">
			<Header />
			<div className="main">
				<Navegacion />
				<div className="content">
					<div className="container-fluid">
						<div className="row mb-3">
							
							<div className="col">
								<div className="card">
									<div className="card-header">
										<h6 className="card-title mb-0">
											{amigo.nombre}
										</h6>
									</div>

									<div className="card-body">
										<div className="row no-gutters">
											<div className="col-sm-3 col-xl-12 col-xxl-4 text-center">
												{amigo.imagen ? 
													<img 
														src={`${process.env.REACT_APP_BACKEND_URL}/${amigo.imagen}`} 
														width="64" 
														height="64" 
														className="rounded-circle mt-2" 
														alt={amigo.nombre} 
													/> :
													<img 
														src="/img/avatar-static.jpg" 
														className="rounded-circle mt-2" 
														alt="member with no pic"
														width="64" 
														height="64" 
													/>
												}
											</div>
											<div className="col-sm-9 col-xl-12 col-xxl-8">
												<strong className="text-muted">My Social Links</strong>
												<div className="row d-flex justify-content-between px-5 py-3 align-items-center">
													{ amigo.linkedin ? 
														<a 
															className="btn btn-sm btn-primary rounded-circle mx-3 my-1" 
															href={`https://www.linkedin.com/in/${amigo.linkedin}`} 
															target="_blanck"
														>
															<i className="fab fa-linkedin-in"></i>
														</a> :
														<a 
															className="btn btn-light rounded-circle mx-3 my-1" 
															href="#" 
														>
															<i className="fab fa-linkedin-in text-muted"></i>
														</a>
													}
													{ amigo.twitter ? 
														<a 
															className="btn btn-info rounded-circle mx-3 my-1" 
															href={`https://www.twitter.com/${amigo.twitter}`} 
															target="_blanck"
														>
															<i className="fab fa-twitter"></i>
														</a> :
														<a 
															className="btn btn-light rounded-circle mx-3 my-1" 
															href="#" 
														>
															<i className="fab fa-twitter text-muted"></i>
														</a>
													}
													{ amigo.facebook ? 
														<a 
															className="btn btn-primary rounded-circle mx-3 my-1" 
															href={`https://www.facebook.com/${amigo.facebook}`} 
															target="_blanck"
														>
															<i className="fab fa-facebook-f"></i>
														</a> :
														<a 
															className="btn btn-light rounded-circle mx-3 my-1" 
															href="#" 
														>
															<i className="fab fa-facebook-f text-muted"></i>
														</a>
													}
													{ amigo.instagram ? 
														<a 
															className="btn btn-danger rounded-circle mx-3 my-1" 
															href={`https://www.instagram.com/${amigo.instagram}`} 
															target="_blanck"
														>
															<i className="fab fa-instagram"></i>
														</a> :
														<a 
															className="btn btn-light rounded-circle mx-3 my-1" 
															href="#" 
														>
															<i className="fab fa-instagram text-muted"></i>
														</a>
													}
												</div>
											</div>
											<hr />
											<table className="table table-sm my-2">
												<tbody>
													<tr>
														<th>
															Ocuppation
														</th>
														<td>
															{amigo.actividad}
														</td>
													</tr>
													<tr>
														<th>
															Company
														</th>
														<td>
															{amigo.empresa}
														</td>
													</tr>
													<tr>
														<th>
															Email
														</th>
														<td>
															{amigo.email}
														</td>
													</tr>
													<tr>
														<th>
															Address
														</th>
														<td>
															{amigo.direccion} - {amigo.pais}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className="row d-flex justify-content-end">
											<Link to="/contacts" className="mx-2 text-primary btn">
												<i className="far fa-arrow-alt-circle-left mr-2"></i> Back to contact list
											</Link>
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
export default AmigoDetalle;