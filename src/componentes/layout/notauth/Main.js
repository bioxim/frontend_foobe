import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './addons/noauth.css';
import MembershipFE from './MembershipFE';
import Newsletter from './Newsletter';

const Main = (props) => (
	<Fragment>
		<section className="pt-4 pt-md-11 pb-3">
		      <div className="container">
		        <div className="row align-items-center">
		          <div className="col-12 col-md-6 order-md-2">
		            <img src="img/illustration-main.png" alt="imagen ilustrativa foobe" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" />
		          </div>
		          <div className="col-12 col-md-6">
		            <h2 className="display-4 text-center text-md-left">
		              { !localStorage.getItem('button', 'esp') ? 'Welcome to' : 'Bienvenidos a' } <span className="text-primary font-weight-bold">Foobe</span>. <br/>
		          	</h2>
		            <h5 className="font-italic color-pink">{ !localStorage.getItem('button', 'esp') ? 'for food Traders.' : 'Para traders de alimentos.' } </h5>
		            
		            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
		              { !localStorage.getItem('button', 'esp') ? 'Be a member of this community, built for traders and eveyone involved in food & beverages products.' : 'Únase a esta comunidad, construida para todos los relacionados con el comercio de alimentos y bebidas.' }
		            </p>

		            <div className="text-center text-md-left">
		              <Link to={"/users-guide"} className="btn btn-primary">
		                { !localStorage.getItem('button', 'esp') ? 'Documentation' : 'Guía de usuario' } <i class="fas fa-arrow-right"></i>
		              </Link>
		            </div>

		          </div>
		        </div>
		      </div> 
	    </section>

	    <section className="pt-9 pt-md-12 bg-gray-200">
	      <div className="container pb-3">
	        <div className="row justify-content-center">
	          <div className="col-12 col-md-10 col-lg-8 text-center">
	            
	            <h1 className="pt-3">
	              { !localStorage.getItem('button', 'esp') ? 'Be a Member for a lifetime.' : 'Sea Miembro de por vida.' }
	            </h1>

	            <p className="lead pb-3">
	              { !localStorage.getItem('button', 'esp') ? 'We offer many tools to connect our members in order to achieve successful businesses, in addition to the implementation of daily updates to expand the capacity of Foobe, only paying once.' : 'Ofrecemos herramientas para conectar con nuestros usuarios para lograr negocios exitosos, además de actualizar y expandir las funcionalidades de Foobe, únicamente pagando por única vez.' }
	            </p>

	          </div>
	        </div>
	        <div className="row align-items-center no-gutters">
	          <div className="col-12 col-md-6">

	            <div className="card rounded-lg shadow-lg mb-6 mb-md-0">

	              <div className="card-body py-6 py-md-8">
	                <div className="row justify-content-center">
	                  <div className="col-12 col-xl-9">

	                    <div className="text-center mb-5">
	                      <span className="badge badge-pill badge-success-soft">
	                        <span className="h6 text-primary font-weight-bold text-uppercase">{ !localStorage.getItem('button', 'esp') ? 'Membership' : 'Membresía' }</span>
	                      </span>
	                    </div>

	                    <div className="d-flex justify-content-center">
	                      <span className="h2 mb-0 mt-2">U$D</span>
	                      <span className="price display-2 mb-0">36</span>
	                      <span className="h2 align-self-end mb-1">/{ !localStorage.getItem('button', 'esp') ? 'once' : 'única vez' }</span>
	                    </div>

	                    <p className="text-center text-muted mb-6 mb-md-8">
	                      { !localStorage.getItem('button', 'esp') ? 'lifetime' : 'para siempre' }
	                    </p>

	                    <div className="d-flex">

	                      <MembershipFE />

	                    </div>

	                  </div>
	                </div> 
	              </div>

	              <Link to={"/buy-now"} className="card-btn btn btn-block btn-lg btn-primary">
	                { !localStorage.getItem('button', 'esp') ? 'Get it now' : 'Adquirirla ahora' }
	              </Link>

	            </div>

	          </div>
	          <div className="col-12 col-md-6 ml-md-n3">

	            <div className="card rounded-lg shadow-lg">

	              <div className="card-body py-6 py-md-8">
	                <div className="row justify-content-center">
	                  <div className="col-12 col-xl-10">

	                    <p className="text-center mb-8 mb-md-11">
	                      <span className="badge badge-pill badge-success-soft">
	                        <span className="h6 text-primary font-weight-bold text-uppercase">Enterprise</span>
	                      </span>
	                    </p>

	                    <p className="lead text-center text-muted mb-0 mb-md-10">
	                      { !localStorage.getItem('button', 'esp') ? 'We offer variable pricing with discounts for larger organizations. Get in touch with us and we’ll figure out something that works for everyone.' : 'Ofrecemos precios con descuentos para grandes empresas.  Contacte con nosotros para más detalles.' }
	                    </p>

	                  </div>
	                </div> 
	              </div>

	              <Link to={"/contact-details"} className="card-btn btn btn-block btn-lg btn-light">
	                { !localStorage.getItem('button', 'esp') ? 'Contact us' : 'Contacto' }
	              </Link>

	            </div>

	          </div>
	        </div> 
	      </div> 
	    </section>

	    <section className="py-8 py-md-11 bg-dark">
		    <div className="container">
		        <div className="row justify-content-center">
		          	<div className="col-12 col-md-10 col-lg-8 text-center">

			            <span className="badge badge-pill badge-gray-700-soft mb-4">
			              <span className="h6 font-weight-bold text-uppercase">{ !localStorage.getItem('button', 'esp') ? 'Get started Free' : 'Comience sin costo' }</span>
			            </span>

			            <h1 className="display-4 text-white">
			              { !localStorage.getItem('button', 'esp') ? 'Join our DATABASE.' : 'Ingrese la BASE DE DATOS.' }
			            </h1>

			            <p className="font-size-lg texto-light mb-6 mb-md-8">
			             { !localStorage.getItem('button', 'esp') ? 'If you are a producer, manufacturer, trader or provide services of any kind, related to food and beverages, fill this form and be able to get to the members of the Foobe community.' : 'Si es productor, fabricante, comerciante o provee servicios, relacionados a los alimentos y bebidas, rellene este formulario y los miembros Foobe verán su contacto de negocios' }
			            </p>

			            <Link to={"/data"} className="btn btn-success lift">
			              { !localStorage.getItem('button', 'esp') ? 'DATABASE' : 'BASE DE DATOS' } <i className="fas fa-arrow-right ml-2"></i>
			            </Link>

		          	</div>
		        </div>
		    </div>
	    </section>

	    <section className="pt-9 pt-md-12 bg-dark contenedor-vacio">
	    </section>  

        <Newsletter />

	</Fragment>    
)

export default Main;