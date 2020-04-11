import React, { useState, useEffect, useContext } from 'react';
import { Header, Navegacion } from '../../layout/auth';
import clienteAxios from '../../../config/axios';
import { CRMContext } from '../../../context/CRMContext';
import DirectorioMenu from './DirectorioMenu';
import Directorio from './Directorio';
import moment from 'moment';
import ContactosTodos from './ContactosTodos';
import '../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

function MensajeriaDetalle(props) {

	const lector = props.match.params.id; //id del que lee el mensaje

	//traer todo el historial de la conversación
	//tomar el id del que quiere enviar el mensaje (usuario logueado)
	const [ clientes, guardarClientes ] = useState([]);
	const [auth, guardarAuth] = useContext(CRMContext);
	const { credenciales } = auth;
	const { email } = credenciales;

	const [ mensajes, guardarMensajes ] = useState([]);

	const [ miembro, guardarMiembro ] = useState([]); //Para el listado de amigos

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const clientesConsulta = await clienteAxios.get('/clientes');
			// colocar el resultado en el state
			guardarClientes(clientesConsulta.data);
		}
		consultarAPI();
	}, [clientes, guardarAuth]);

	let escritor = '';

	for( let cliente of clientes ) {
		if(cliente.email === credenciales.email) { 
				escritor = cliente._id; // id del que estoy logueada (escritor)
		}
	}

	//console.log('Usuario logueado: ', escritor, 'Enviar a: ', lector);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const mensajesConsulta = await clienteAxios.get('/msg');
			// colocar el resultado en el state
			guardarMensajes(mensajesConsulta.data);
		}
		consultarAPI();
	}, [mensajes]);
	
	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const miembroConsulta = await clienteAxios.get(`/clientes/${escritor}`);
	            guardarMiembro(miembroConsulta.data);
	        }

	        consultarAPI();
    }, [escritor, miembro]);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return(
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

										<DirectorioMenu />

									</div>
									
								</div>

							</div>

							<div className="col-md-10">
								
								<div className="tab-content">
												
									<div className="tab-pane fade show active" role="tabpanel">
										<div className="card">
											<div className="card-header d-flex justify-content-between">
												<h6 className="card-title mb-0">
													Messages to (lector) 
												</h6>
												<h4>
													<i className="fas fa-feather text-success mr-2"></i>
												</h4>
											</div>
											<div className="card-body">
												{ mensajes.map(mensaje =>(
													<ul className="list-group list-group-flush">
														{ ( (mensaje.lector === lector) && (mensaje.escritor === escritor) ) ?
															<li className="list-group-item border-bottom py-0">
																<div className="row d-flex w-100 justify-content-between">
																	<h6 className="text-muted my-1">{mensaje.titulo}</h6>
																	<h6 className="text-muted my-1"><i className="far fa-clock mr-1"></i> <small>{moment(`${mensaje.fecha}`).format('MMMM Do YYYY')}</small></h6>
																	<h6 className="text-muted my-1"><i class="fas fa-envelope mr-1 text-primary"></i></h6>
																	<h6 className="my-1"><i className="fas fa-trash mr-1 text-danger"></i></h6>
																</div>
															</li>
															: 'No messages yet' 
														} 
													</ul>
												))}
											</div>
										</div>
									</div>

									<div className="tab-pane fade show" id="all" role="tabpanel">
													<div className="card">
														<div className="card-header d-flex justify-content-between">
															<h6 className="card-title mb-0">
																Your contacts ({ miembro.amigos ? miembro.amigos.length : 0 }) central - All messages
															</h6>
														</div>
														<div className="card-body">
															<div className="col">
																<table className="table table-striped dataTable no-footer dtr-inline">
																	<tbody>
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
																	</tbody>
																</table>
															</div>
														</div>
													</div>
									</div>
									
									<Directorio />
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default(MensajeriaDetalle);