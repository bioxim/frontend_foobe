import React, { useState, useEffect, useContext } from 'react';
import '../Dashboard.css';
import '../../layout/auth/Header.css';
import Header from '../../layout/auth/Header';
import Navegacion from '../../layout/auth/Navegacion';
import Bienvenida from '../navbar/Bienvenida';
import clienteAxios from '../../../config/axios';
import AmigosListado from './AmigosListado';

import { CRMContext } from '../../../context/CRMContext';

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

	const clienteId = clientes.map(
		cliente => (
			(cliente.email === email) ? cliente._id : ''
		));

	const id = clienteId.filter(Boolean); //id del usuario logueado

	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const usuarioConsulta = await clienteAxios.get(`/clientes/${id}`);
	            guardarUsuarioLogueado(usuarioConsulta.data);
	        }

	        consultarAPI();
    }, [id, usuarioLogueado]);
	
	const contactos = usuarioLogueado.amigos;

	let total;

	if( contactos !== undefined ) {
		total = contactos.length;
	}

	return (
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
							
							<div className="col">
								<div className="card">
									<div className="card-header d-flex justify-content-between">
										<h6 className="card-title mb-0">
											Contacts
										</h6>
									</div>
									
									<div className="dataTables_filter text-right pr-3">
										<label className="text-muted">
											<input 
												type="search" 
												className="form-control form-control-sm" 
												placeholder="Search" 
												aria-controls="datatables-clients" 
											/>
										</label>
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
														<th colspan="2" className="d-none d-sm-block">
															Email
														</th>
														<th>
															Detail
														</th>
													</tr>
												</thead>
												<tbody>
													{
														(contactos !== undefined ) ?
															contactos.map(contacto => (
																<AmigosListado
																	contacto={contacto}
																/>
															)): null
													}
												</tbody>
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