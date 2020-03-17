import React, { useEffect, useState, Fragment } from 'react';
import clienteAxios from '../../../config/axios';

const MembershipFE = ({history}) => {

	const [ contenidos, guardarContenidos ] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//console.log('Consultando...');
		const contenidosConsulta = await clienteAxios.get('/contenidos');
			//console.log(contenidosConsulta.data);

			// colocar el resultado en el state
			guardarContenidos(contenidosConsulta.data);
		}
		consultarAPI();
	}, [contenidos]);

	return (
		<Fragment>
			<ul className="list-group">
	        {contenidos.map(contenido => (
				<li 
					className="list-unstyled d-flex"
				>	
						<div className="badge badge-rounded-circle badge-success mt-1 mr-4">
				          <i className="fas fa-check"></i>
				        </div>
				    	<p>{contenido.tagline}</p>
				</li>
			))}
			</ul>
		</Fragment>
	)
}

export default MembershipFE;