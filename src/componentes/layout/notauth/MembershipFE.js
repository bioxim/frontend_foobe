import React, { useEffect, useState, Fragment } from 'react';
import clienteAxios from '../../../config/axios';
import Loader from 'react-loader-spinner';
import '../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MembershipFE = ({history}) => {

	const [ contenidos, guardarContenidos ] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//console.log('Consultando...');
		const contenidosConsulta = await clienteAxios.get('/contenidos');
			guardarContenidos(contenidosConsulta.data);
		}
		consultarAPI();
	}, [contenidos]);

	return (
		<Fragment>
			<ul className="list-group">
	        {contenidos.map(contenido => (
	        	contenido ?
				<li 
					className="list-unstyled d-flex"
				>	
						<div className="badge badge-rounded-circle badge-success mt-1 mr-4">
				          <i className="fas fa-check"></i>
				        </div>
				    	<p>{contenido.tagline}</p>
				</li> :
				<Loader
					type="BallTriangle"
					color="#38cd"
					height={30}
					width={30}

				/>
			))}
			</ul>
		</Fragment>
	)
}

export default MembershipFE;