import React, { useState, useEffect, useContext, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Header, Navegacion } from '../../layout/auth';
import clienteAxios from '../../../config/axios';
import { CRMContext } from '../../../context/CRMContext';
import Bienvenida from '../navbar/Bienvenida';
import moment from 'moment';
import '../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NuevoMensaje(props) {

	const lector = props.match.params.id; // id del que va a recibir el mensaje

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

	let escritorLogueado = '';

	for( let cliente of clientes ) {
		if(cliente.email === credenciales.email) { 
				escritorLogueado = cliente._id; // id del que estoy logueada (escritor)
		}
	}

	const [ receptor, guardarReceptor ] = useState([]);
	const [ escritor, guardarEscritor ] = useState([]);

	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const receptorConsulta = await clienteAxios.get(`/clientes/${lector}`);
	            guardarReceptor(receptorConsulta.data);

	            const escritorConsulta = await clienteAxios.get(`/clientes/${escritorLogueado}`);
	            guardarEscritor(escritorConsulta.data);
	        }

	        consultarAPI();
    }, [receptor, escritor]);

    const [doc, guardarDoc] = useState({
		titulo: '',
		lector: lector,
		escritor: ''
	});

	const [texto, guardarTexto] = useState('');

	const agregarMensaje = async e => {
        e.preventDefault();

        doc.escritor = escritorLogueado;
        doc.mensaje = texto;

        // almacenarlo en la BD
        try {
            const res = await clienteAxios.post('/msg', doc);
            //lanzar alerta
            if(res.status === 200) {
                Swal.fire(
                    'Message sent',
                    res.data.mensaje,
                    'success'
                )
            }

            // redireccionar
            props.history.push('/messages');

        } catch(error) {
            console.log(error);
            // lanzar alerta
            Swal.fire({
                type: 'error',
                title: 'Something happens',
                text: 'Pls, try again'
            })
        }
    }

    // leer los datos del formulario
        const leerInformacionDoc = e => {
            guardarDoc({
                ...doc,
                [e.target.name]: e.target.value
            })
        }

        const leerTexto = texto => {
            //console.log(e.target.files);
            guardarTexto(texto);
        }

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
						<div className="header">
							<Bienvenida />
						</div>
						<div className="row mb-3">
							<div className="col">
								<div className="card">
									<div className="card-header d-flex justify-content-between border-bottom">
										{ escritor ?
											<h5 className="text-dark">from: <span className="font-weight-bold">{escritor.nombre}</span>
											</h5> :
											<Loader
												type="BallTriangle"
												color="#38cd"
												height={30}
												width={30}

											/>
										}
										{ receptor ?
											<h5 className="text-dark">to: <span className="font-weight-bold">{receptor.nombre}</span>
											</h5> :
											<Loader
												type="BallTriangle"
												color="#38cd"
												height={30}
												width={30}

											/>
										}

									</div>
									<div className="card-body p-5">
										<form
											onSubmit={agregarMensaje}
										>
											<div className="form-row">
												<div className="col-12">
													<div className="form-group">
														<label>
															Title
														</label>
														<input 
															name="titulo" 
															type="text" 
															className="form-control"
															onChange={leerInformacionDoc}
														/>
													</div>
												</div>
											</div>

											<div className="form-row">
												<div className="col-12" height="1000">
													<div className="form-group">
														<label>Message</label>
														<ReactQuill 
															theme="snow"
															value={texto}
															onChange={leerTexto}
														/>
													</div>
												</div>
											</div>
											
											<div className="row d-flex justify-content-between">
												{ escritorLogueado ? 
													<input 
														className="btn btn-primary my-3" 
														value="SEND" 
														type="submit"
													/> 
													:
													<Loader
														type="BallTriangle"
														color="#38cd"
														height={20}
														width={20}
													/>
												}
											</div>
										</form>
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
export default withRouter(NuevoMensaje);