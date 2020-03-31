import React, { useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';

const Estadisticas = (props) => {

	const [ clientes, guardarClientes ] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const clientesConsulta = await clienteAxios.get('/clientes');
			// colocar el resultado en el state
			guardarClientes(clientesConsulta.data);
		}
		consultarAPI();
	}, [clientes]);
	
	return (
		<div className="row mb-3">
			<div className="d-flex col-12">
				<div className="flex-fill w-100">
					<div className="w-100 text-right">
						<h6 className="text-muted p-3">
							<i className="fas fa-street-view mr-2"></i> 
							Members: {clientes.length}
						</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Estadisticas;