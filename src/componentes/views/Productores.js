import React, { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import useRecaptcha, { Badge } from 'react-recaptcha-hook';
import clienteAxios from '../../config/axios';

import '../views/Styles.css';

const Productores = (props, { action, sitekey, onToken }) => {

	const [productor, guardarProductor] = useState({
		nombre: '',
		apellido: '',
		email: '',
		telefono: '',
		producto: '',
		zona: '',
		pais: '',
		ciudad: '',
		estado: '',
		direccion: ''
	});

	const [ paises, guardarPaises ] = useState([]);

	const execute = useRecaptcha({ 
		sitekey: '6LffAMEUAAAAAH2JyvylYI0KQ3goVt00hlPbpyXF', 
		hideDefaultBadge: true 
	});

	useEffect(() => {
    	const getToken = async () => {
	      const token = await execute(action);
	      onToken(token);
    };

    getToken();
  	}, [action, execute, onToken]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

			const paisesConsulta = await clienteAxios.get('https://restcountries.eu/rest/v2/all');

			guardarPaises(paisesConsulta.data);

		}
		consultarAPI();
	}, [paises]);

	const agregarProductor = async e => {
        e.preventDefault();

        clienteAxios.post('/productores', productor)
			.then(res => {
				//console.log(res);
				if(res.status === 200) {
					Swal.fire(
					  'Added!',
					  res.data.mensaje,
					  'success'
					)
				// redireccionar
            	props.history.push('/data-success');
            	
				} else {
					Swal.fire({
		                type: 'error',
		                title: 'Error',
		                text: 'Please try again'
		            })
				}

			}           
		);

    }

    // leer los datos del formulario
    const leerInformacionProductor = e => {
        guardarProductor({
                //obtener una copia del state y agregar el nuevo
                ...productor,
                [e.target.name]: e.target.value
        })
    }

	return (
		<Fragment>
			<section className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover background-productores-image">
		      <div className="container">
		        <div className="row justify-content-center">
		          <div className="col-12 col-md-10 col-lg-8 text-center">
		            
		            <h1 className="display-3 font-weight-bold text-white">
		              Be part of Foobe.
		            </h1>

		            <p className="lead text-white-75 mb-0">
		              Please send us your contact information by filling out this form and you will appear with your product in our database, which reaches all our members, free of cost.
		            </p>

		          </div>
		        </div> 
		      </div> 
	    	</section>

	    	<div className="position-relative">
		      <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
		        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
		        </svg>
		      </div>
		    </div>

		    <section className="py-7 py-md-9 border-bottom border-gray-300 outline-outline" id="info" tabindex="-1">
		      <div className="container">
		        <div className="row">
		          <div className="col-12 text-center">
		            
		            <a href="#info" className="btn btn-white btn-rounded-circle shadow mt-n11 mt-md-n13" data-toggle="smooth-scroll">
		              <i className="fas fa-arrow-down"></i>
		            </a>

		          </div>
		        </div> 

		        <div className="row">
		        	<div className="card col-12">
		        		<div className="card-header">
		        			<h5 className="card-title text-uppercase">
								Please fill in your contact information
							</h5>
							<h6 className="card-subtitle text-muted"> If you are a producer, manufacturer, trader or provide services of any kind, related to food and beverages, fill this form and be able to get to the members of the Foobe community for free.
							</h6>
		        		</div>
		        		<div className="card-body">
		        			<form
								className="bg-light p-3"
								onSubmit={agregarProductor}
		        			>
		        				<div className="form-row">
		        					<div className="col-md-3">
		        						<label className="text-uppercase text-muted">
											Name
										</label>
										<input 
											name="nombre" 
											placeholder="Nombre" 
											type="text" 
											className="form-control"
											required
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        					<div className="col-md-3">
		        						<label className="text-uppercase text-muted">
											Surname
										</label>
										<input 
											name="apellido" 
											placeholder="Apellido" 
											type="text" 
											className="form-control"
											required
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        					<div className="col-md-3">
		        						<label className="text-uppercase text-muted">
											<i class="fas fa-phone-alt mr-2"></i> Phone
										</label>
										<input 
											name="telefono" 
											placeholder="Teléfono" 
											type="text" 
											className="form-control"
											required
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        					<div className="col-md-3">
		        						<label className="text-uppercase text-muted">
											<i class="fas fa-envelope mr-2"></i> Email
										</label>
										<input 
											name="email" 
											placeholder="Correo electrónico" 
											type="text" 
											className="form-control"
											required
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        				</div>
		        				<div className="form-row pt-3">
		        					<div className="col-md-6">
		        						<label className="text-uppercase text-muted">
											Product(s)
										</label>
										<input 
											name="producto" 
											placeholder="Producto" 
											type="text" 
											className="form-control"
											required
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        					<div className="col-md-6">
		        						<label className="text-uppercase text-muted">
											<i class="fas fa-map-marked mr-2"></i> Production Area
										</label>
										<input 
											name="zona" 
											placeholder="Área de Producción" 
											type="text" 
											className="form-control"
											required
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        				</div>
		        				<div className="form-row pt-3">
		        					<div className="col-md-2">
		        						<label className="text-uppercase text-muted">
											Country
										</label>
										<select 
											name="pais" 
											className="custom-select"
											required
											onChange={leerInformacionProductor}
										>
											<option selected disabled>-- Elige un país --</option>
											{paises.map(pais =>(
												<option value={pais.name}>{pais.name}</option>
											))}
										</select>
		        					</div>
		        					<div className="col-md-2">
		        						<label className="text-uppercase text-muted">
											City
										</label>
										<input 
											name="ciudad" 
											placeholder="Ciudad" 
											type="text" 
											className="form-control"
											required
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        					<div className="col-md-2">
		        						<label className="text-uppercase text-muted">
											State
										</label>
										<input 
											name="estado" 
											placeholder="Estado / Provincia" 
											type="text" 
											className="form-control"
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        					<div className="col-md-6">
		        						<label className="text-uppercase text-muted">
											Address
										</label>
										<input 
											name="direccion" 
											placeholder="Dirección" 
											type="text" 
											className="form-control"
											required
											onChange={leerInformacionProductor}
										/>
		        					</div>
		        				</div>
		        				<div className="form-row pt-2">
		        					<div className="col">
		        						<small className="text-muted">*All the fields are required</small>
		        					</div>
		        				</div>
		        				<div className="form-row pt-2 justify-content-center">
		        					<div className="col-md-9 pt-3">
		        						<Badge />
		        					</div>
		        					<div className="col-md-3 text-center">
			        					<input 
											className="btn btn-primary my-3 text-uppercase font-weight-bold" 
											value="Save changes" 
											type="submit"
										/>
									</div>
		        				</div>
		        			</form>
		        		</div>
		        	</div>
		        </div>
		        
		        <div className="row">
		          <div className="col-12 col-md-4 text-center border-right border-gray-300">
		            
		            <h6 className="text-uppercase text-gray-700 mb-1">
		              Whatsapp
		            </h6>

		            <div className="mb-5 mb-md-0">
		              <h4 className="text-primary">
		                +54 11 6117 5832
		              </h4>
		            </div>

		          </div>
		          <div className="col-12 col-md-4 text-center border-right border-gray-300">
		            
		            <h6 className="text-uppercase text-gray-700 mb-1">
		              Call anytime
		            </h6>

		            <div className="mb-5 mb-md-0">
		              <h4 className="text-primary">
		                +54 (0) 2320 476219
		              </h4>
		            </div>

		          </div>
		          <div className="col-12 col-md-4 text-center">
		            
		            <h6 className="text-uppercase text-gray-700 mb-1">
		              Email us
		            </h6>

		            <h4 class="text-primary font-italic">
		              contact@foobe.com.ar
		            </h4>

		          </div>
		        </div> 
		      </div>
		    </section>
		</Fragment>
	)
}

export default withRouter(Productores);