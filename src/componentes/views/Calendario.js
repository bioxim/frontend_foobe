import React, { useState, useEffect, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import moment from 'moment';

const Calendario = ({history}) => {

	const [ eventos, guardarEventos ] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//console.log('Consultando...');
		const eventosConsulta = await clienteAxios.get('/calendarios');
			guardarEventos(eventosConsulta.data);
		}
		consultarAPI();
	}, [eventos]);

	return (
		<Fragment>
			<section className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover background-map-image">
		      <div className="container">
		        <div className="row justify-content-center">
		          <div className="col-12 col-md-10 col-lg-8 text-center">
		            
		            <h1 className="display-3 font-weight-bold text-white">
		              { !localStorage.getItem('button', 'esp') ? 'Upcoming events.' : 'Próximos eventos.' }
		            </h1>

		            <p className="lead text-white-75 mb-0">
		              { !localStorage.getItem('button', 'esp') ? 'Foobe will be in these international events listed below, where we can promote your food products making it possible to do the best business for you.' : 'Foobe asistirá a éstos eventos, donde podrá promocionar los productos de sus miembros registrados, generando increíbles negocios para usted.' }
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
		        {eventos.map(evento => (
		        	<Fragment>
			        	<div className="row justify-content-center mb-3">
				        	<div className="row align-items-center">
				        		<div className="col-12 m-3">
			            			<img src={`${process.env.REACT_APP_BACKEND_URL}/${evento.imagen}`} className="img-fluid" width="300" alt={evento.nombre} />
			          			</div>
				        	</div>
				        	<div className="row">
				        		<div className="col-12">
				        			<div className="card card-border border-danger shadow-light-lg mb-6 mb-md-8 aos-init aos-animate" data-aos="fade-up">
						              <div className="card-body">
						                <h6 className="text-uppercase text-danger d-inline-block mb-5 mr-1">
						                  {evento.nombre}
						                </h6>
						                
						                <span className="badge badge-rounded-circle badge-danger-soft">
						                  <span>{moment(`${evento.fechainicial}`).format('YYYY')}</span>
						                </span>
						                <div>
						                  <div className="list-group list-group-flush">
						                    <a className="list-group-item text-reset text-decoration-none" href="#!">  
						                      <p className="font-weight-bold text-dark mb-1">
						                        { !localStorage.getItem('button', 'esp') ? 'Date' : 'Fecha' }
						                      </p>
						                      <p className="font-size-sm text-muted mb-0">
						                        { !localStorage.getItem('button', 'esp') ? 'from' : 'desde' } {moment(`${evento.fechainicial}`).format('MMMM Do YYYY')} { !localStorage.getItem('button', 'esp') ? 'to' : 'al' } {moment(`${evento.fechafin}`).format('MMMM Do YYYY')}
						                      </p>
						                    </a>
						                    <a className="list-group-item text-reset text-decoration-none" href="#!">

						                      <p className="font-weight-bold text-dark mb-1">
						                        { !localStorage.getItem('button', 'esp') ? 'Address' : 'Dirección' }
						                      </p>
						                      <p className="font-size-sm text-muted mb-0">
						                        {evento.direccion}
						                      </p>

						                    </a>
						                    <a className="list-group-item text-reset text-decoration-none" href="#!">
						                      <p className="font-weight-bold text-dark mb-1">
						                        { !localStorage.getItem('button', 'esp') ? 'Country' : 'País' }
						                      </p>
						                      <p className="font-size-sm text-muted mb-0">
						                       {evento.pais}
						                      </p>
						                    </a>
						                  </div>
						                </div>
						              </div>
						            </div>
				        		</div>
				        	</div>
			        	</div>
		        	</Fragment>
          		))}
          		<div className="row p-3">
					<h4>{ !localStorage.getItem('button', 'esp') ? 'Be a member now! Contact us for further details:' : 'Sea parte de Foobe! Contáctenos para más detalles:' }</h4>
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
		              { !localStorage.getItem('button', 'esp') ? 'Call anytime' : 'Llama en cualquier momento' }
		            </h6>

		            <div className="mb-5 mb-md-0">
		              <h4 className="text-primary">
		                +54 (0) 2320 476219
		              </h4>
		            </div>

		          </div>
		          <div className="col-12 col-md-4 text-center">
		            
		            <h6 className="text-uppercase text-gray-700 mb-1">
		              { !localStorage.getItem('button', 'esp') ? 'Email us' : 'Email' }
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
export default Calendario;