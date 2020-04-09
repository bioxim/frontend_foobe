import React, { useState, useEffect, useContext } from 'react';
import { Header, Navegacion } from '../../layout/auth';
import clienteAxios from '../../../config/axios';
import AmigosListado from './AmigosListado';

import { CRMContext } from '../../../context/CRMContext';

import Loader from 'react-loader-spinner';
import '../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Amigos = (props) => {

	const [auth, guardarAuth] = useContext(CRMContext);

	if(!auth.auth) {
		props.history.push('/login');
	}

	const { credenciales } = auth;
	const { email } = credenciales;

	const [ clientes, guardarClientes ] = useState([]); //Mapeo todos los miembros y comparo
	const [ usuarioLogueado, guardarUsuarioLogueado ] = useState([]); //Obtengo el objeto usario logueado para tener sus amigos

	useEffect( () => {
		const consultarAPI = async () => {

		const clientesConsulta = await clienteAxios.get('/clientes');
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
	            const usuarioConsulta = await clienteAxios.get(`/clientes/${id}`);
	            guardarUsuarioLogueado(usuarioConsulta.data);
	        }

	        consultarAPI();
    }, [id, usuarioLogueado]);
	
	const contactos = usuarioLogueado.amigos;

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
									<div className="card-header d-flex justify-content-between">
										<h6 className="card-title mb-0">
											Contacts
										</h6>
									</div>

									<div className="card-body">
										<div className="col">
											<table className="table table-striped dataTable no-footer dtr-inline">
												<thead>
													<tr>
														<th className="d-none d-sm-block">
															<i className="fas fa-camera-retro"></i>
														</th>
														<th colspan="2">
															Name
														</th>
														<th colspan="2">
															Company
														</th>
														<th>
															Detail
														</th>
														<th>
															Msg
														</th>
													</tr>
												</thead>
												{
													contactos ?
														contactos.map(contacto => (
															<tbody>
																<AmigosListado
																	contacto={contacto}
																/>
															</tbody> 													
													)):
													<tbody>
														<tr>
															<td colspan="6" className="text-center">
																<Loader
																	type="BallTriangle"
																	color="#38cd"
																	height={40}
																	width={40}

																/>
															</td>
														</tr>
													</tbody>
												}
												
											</table>
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
export default Amigos;