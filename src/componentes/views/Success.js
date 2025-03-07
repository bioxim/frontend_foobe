import React, { Fragment } from 'react';

import './Styles.css';

const Success = () => (
	<Fragment>
		<section className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover background-success-image">
	      <div className="container">
	        <div className="row justify-content-center">
	          <div className="col-12 col-md-10 col-lg-8 text-center">
	            
	            <h1 className="display-3 font-weight-bold text-white">
	              { !localStorage.getItem('button', 'esp') ? 'Thank you!.' : 'Muchas gracias!.' }
	            </h1>

	            <p className="lead text-white-75 mb-0">
	              { !localStorage.getItem('button', 'esp') ? 'Welcome to Foobe! now we are going to email very soon with you login in details.' : 'Bienvenidos a Foobe! en unos minutos le llegará un email con los detalles de registro.' }
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
	              { !localStorage.getItem('button', 'esp') ? 'Call anytime' : 'Llámenos' }
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
export default Success;
