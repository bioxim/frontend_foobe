import React from 'react';
import { Link } from 'react-router-dom';

const ProductoresSuccess = () => (
		<section className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover background-invitation-image">
		      <div className="container">
		        <div className="row justify-content-center">
		          <div className="col-12 col-md-10 col-lg-8 text-center">
		            
		            <h1 className="display-3 font-weight-bold text-white">
		              { !localStorage.getItem('button', 'esp') ? 'Thank you!' : 'Muchas gracias!' }
		            </h1>

		            <p className="lead text-white-75 mb-3">
		              { !localStorage.getItem('button', 'esp') ? 'Now you are in Foobes database.  The next step is being part of this community. Many tools and connection ways in order to making business are waiting for you. You only pay once and forever.' : 'Ahora ya estás en la base de datos de Foobe.  El próximo paso es ser parte de la comunidad.  Muchas herramientas y modos de comunicarte para hacer negocios te están esperando.' }
		            </p>

		            <Link 
		            	to={"/buy-now"}
		            	className="btn btn-lg btn-outline-info mb-0 mt-5"
		            >
		            	{ !localStorage.getItem('button', 'esp') ? 'BE A MEMBER NOW!' : 'SEA MIEMBRO YA' } <i className="fas fa-shopping-cart ml-2"></i>
		            </Link>

		          </div>
		        </div> 
		      </div> 
	    	</section>
)

export default ProductoresSuccess;