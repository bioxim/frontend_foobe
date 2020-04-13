import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CRMContext } from '../../context/CRMContext';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Perfil = ({ _id, nombre, nacimiento, imagen, actividad, empresa, direccion, pais, linkedin, facebook, twitter, instagram, amigos, email, website }, props) => {

	const [auth, guardarAuth] = useContext(CRMContext);

	const { credenciales } = auth;

	const [ clientes, guardarClientes ] = useState([]);
	const [miembroLogueado, guardarMiembroLogueado] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const clientesConsulta = await clienteAxios.get('/clientes');
			// colocar el resultado en el state
			guardarClientes(clientesConsulta.data);
		}
		consultarAPI();
	}, [clientes]);

	let id = '';

	for( let cliente of clientes ) {
		if(cliente.email === credenciales.email) { 
				id = cliente._id; // id del que estoy loguaada
		}
	}

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const miembroConsulta = await clienteAxios.get(`/clientes/${id}`);
			// colocar el resultado en el state
			guardarMiembroLogueado(miembroConsulta.data);
		}
		consultarAPI();

	}, [id, miembroLogueado]);

	const agregarContacto = _id => {

		if( email ) {
			miembroLogueado.amigos.push(_id);

				guardarMiembroLogueado({
					miembroLogueado
				})

			const resultado = clienteAxios.put(`/clientes/editar/${id}`, miembroLogueado);

	        // leer resultado
	        if(resultado.status === 200) {
	            // alerta de todo bien
	            Swal.fire({
	                type: 'success',
	                title: 'Correcto',
	                text: resultado.data.mensaje
	            })
	        } else {
	            // alerta de error
	            Swal.fire({
	                type: 'success',
	                title: 'Contact added',
	                text: 'Pls, go to you contact link'
	            })
	        }
		}
	}

	const removerContacto = _id => {

		let pos_Id = miembroLogueado.amigos.indexOf(_id); // Case sensitive, muestra la posición de Metroid
		//console.log({pos_Id});

		miembroLogueado.amigos.splice(pos_Id, 1);

		guardarMiembroLogueado({
			...miembroLogueado
		})

		const res= clienteAxios.put(`/clientes/editar/${id}`, miembroLogueado);

	        // leer resultado
	        if(res.status === 200) {
	            // alerta de todo bien
	            Swal.fire({
	                type: 'success',
	                title: 'Remove',
	                text: res.data.mensaje
	            })

	        } else {
	            // alerta de error
	            Swal.fire({
	                type: 'success',
	                title: 'Contact removed',
	                text: 'Member remove from your contact list'
	            })
	        }

	}

	return(
		<div className="col-md-4 col-sm-6 col-xs-12 mb-1">
			<div className="card-body bg-white p-1">
				
				<div className="row p-3 bg bg-muted rounded">
					
					<div className="col col-md-6 pr-0 text-center">
						{ imagen ? (
							<img src={`${process.env.REACT_APP_BACKEND_URL}/${imagen}`} alt="imagen" width="60" className="img-fluid rounded-circle" />
							) : null }
						<p className="text-uppercase text-dark pt-3 mb-0 font-weight-bold">{nombre}</p>
						<p className="text-uppercase text-dark mb-0 font-weight-bold"><small>b-day: {moment(`${nacimiento}`).format('MMMM Do')}</small></p>
						<label className="text-muted">{actividad ? (
							<span class="badge badge-secondary-soft">
								<h5 className="m-0">{actividad}</h5>
							</span>
							) : 'Work Activity Here'}
						</label>
						<div className="row w-100 text-center">
							{
								( (id !== _id) && (miembroLogueado.amigos) && (miembroLogueado.amigos.includes(_id)) ) ?
									<Link 
										to={`/messages/${_id}`}
										className="btn"
										data-toggle="tooltip" 
										data-placement="top" 
										title="Send private msg"
									>
										<i class="fas fa-envelope text-success"></i>
									</Link> : null
							}
						</div>
						
					</div>
				<div className="col col-md-6">
					<div className="row">
						<h6>
							{empresa ? (
								<span className="text-uppercase text-muted">
									<i className="far fa-building mr-2"></i> {empresa} - {pais}
								</span>
							) : 'Company - name'}
						</h6>
					</div>
					<div className="row pt-1">
						<small className="text-muted">
							<i class="fas fa-link"></i> Website
						</small>
					</div>
					<div className="row">
						<small className="text-dark">
							{ website ? (
								website
							) : 'Company - website not found' }
						</small>
					</div>
					<div className="row pt-1">
						<small className="text-muted">
							<i class="fas fa-map-marker-alt mr-2"></i> Address
						</small>
					</div>
					<div className="row">
						<small className="text-dark">
							{ direccion ? (
								direccion
							) : 'Company - address and country' }
						</small>
					</div>
					<div className="row pt-1">
						<small className="text-muted">
							<i class="fas fa-thumbtack mr-2"></i> Social Networks
						</small>
					</div>
					<div className="row justify-content-center pt-1">
						{ linkedin ? ( 
							<a className="btn btn-sm btn-primary rounded-circle mx-1" href={`https://www.linkedin.com/in/${linkedin}`} target="_blanck"><i className="fab fa-linkedin-in"></i></a>
						) : null }
						{ twitter ? (
							<a className="btn btn-sm btn-info rounded-circle mx-1" href={`https://twitter.com/${twitter}`} target="_blanck"><i className="fab fa-twitter"></i></a>
						) : null }
						{ facebook ? (
							<a className="btn btn-sm btn-primary rounded-circle mx-1" href={`https://www.facebook.com/${facebook}`} target="_blanck"> <i className="fab fa-facebook-f"></i> </a>
						) : null }
						{ instagram ? (
							<a className="btn btn-sm btn-danger rounded-circle mx-1" href={`https://www.instagram.com/${instagram}`} target="_blanck"><i className="fab fa-instagram"></i></a>
						) : null }
					</div>
					<div className="row justify-content-center">

						{ ( id === _id ) ? 
							null : 
							miembroLogueado.amigos ?
								miembroLogueado.amigos.includes(_id) ?
									<button
										className="btn btn-sm mt-2 btn-outline-danger"
										type="button"
										onClick={() => removerContacto(_id)}
									> 
										- contact 
									</button>
									:
									<button
										className="btn btn-sm mt-2 btn-outline-primary"
										type="button"
										onClick={() => agregarContacto(_id)}
									> 
										+ contact 
									</button>
								:
								<div className="row d-flex w-100 justify-content-center py-5">
									<Loader
										type="BallTriangle"
										color="#38cd"
										height={30}
										width={30}

									/>
								</div>
								
						}					

					</div>
				</div>

				</div>

			</div>
		</div>
	)
}
export default Perfil;