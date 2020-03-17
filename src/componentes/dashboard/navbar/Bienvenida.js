import React, { useEffect, useState, useContext, Fragment } from 'react';
import { CRMContext } from '../../../context/CRMContext';
import clienteAxios from '../../../config/axios';

const Bienvenida = (props) => {

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

	//const totalClientes = clientes.length;

	const clienteNombre = clientes.map(
		cliente => (
			(cliente.email === email) ? cliente.nombre : ''
		));

	return (
		<Fragment>
				<div>
					<h1 className="header-title">
						Welcome {clienteNombre ? clienteNombre : null }!
					</h1>
				</div>
			<p className="header-subtitle">
				Tools and Contacts for F&B traders.
			</p>
		</Fragment>
	)
}

export default Bienvenida;
