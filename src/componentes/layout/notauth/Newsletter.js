import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

import clienteAxios from '../../../config/axios';

const Newsletter = (props) => {

	const[suscriptor, guardarSuscriptor] = useState({
		email: ''
	});

	const agregarSuscriptor = e => {
		e.preventDefault();
		// enviar petición
		clienteAxios.post('/newsletter', suscriptor)
			.then(res => {
				//console.log(res);
				if(res.status === 200) {
					Swal.fire(
					  'Added!',
					  res.data.mensaje,
					  'success'
					)
				// redireccionar
            	props.history.push('/');
            	
				} else {
					Swal.fire({
		                type: 'error',
		                title: 'Error',
		                text: 'Please try again'
		            })
				}

			});
	}

	
	const actualizarState = e => {
		guardarSuscriptor({
			...suscriptor,
			[e.target.name] : e.target.value
		})
	}
	
	// validar el formulario
	const validarSuscriptor = () => {
		// Destructuring
		const { email } = suscriptor;

		// Revisar que las propiedades del state tengan contenido
		let valido = !email.length

		// Return true o false
		return valido;
	}

	return (

		<section className="p-5 bg-gray-200">
		      
		      <div className="container pb-6 pb-md-8 border-gray-300">
		        <div className="row align-items-center">
		          <div className="col-12 col-md">
		            
		            <h3 className="mb-1 text-dark">
		              Get our updates delivered
		            </h3>

		            <p className="font-size-lg text-muted mb-6 mb-md-0">
		              From us to your inbox.
		            </p>

		          </div>
		          <div className="col-12 col-md-5">
		                
		            <form
						onSubmit={agregarSuscriptor}
		            >
		              <div className="row">
		                <div className="col">
		                  
		                  <input 
		                  	name="email"
		                  	type="email" 
		                  	required
		                  	className="form-control" 
		                  	placeholder="Enter your email"
		                  	onChange={actualizarState}  
		                  />

		                </div>
		                <div className="col-auto ml-2">
		                  
		                  <input 
		                  		className="btn btn-primary" 
		                  		type="submit"
		                    	value="Subscribe"
		                    	disabled={validarSuscriptor()}
		                  />

		                </div>
		              </div>
		            </form>

		          </div>
		        </div> 
		      </div> 
		    
		    </section>

	)

}

export default withRouter(Newsletter);