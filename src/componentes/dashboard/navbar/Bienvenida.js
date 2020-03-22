import React, { useEffect, useState, useContext, Fragment } from 'react';
import { CRMContext } from '../../../context/CRMContext';
import clienteAxios from '../../../config/axios';

const Bienvenida = (props) => {

	const [auth, guardarAuth] = useContext(CRMContext);
	const { credenciales } = auth;
	const { email } = credenciales;

	const [ clientes, guardarClientes ] = useState([]);
	const [miembro, guardarMiembro] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const clientesConsulta = await clienteAxios.get('/clientes');
			// colocar el resultado en el state
			guardarClientes(clientesConsulta.data);
		}
		consultarAPI();
	}, [clientes, guardarAuth]);

	const clienteId = clientes.map(
		cliente => (
			(cliente.email === email) ? cliente._id : ''
		));

	const id = clienteId.filter(Boolean);

	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const miembroConsulta = await clienteAxios.get(`/clientes/${id}`);
	            guardarMiembro(miembroConsulta.data);
	        }

	        consultarAPI();
    }, [id, miembro]);

	const { nombre } = miembro;

	return (
		<Fragment>
				<div>
					<h1 className="header-title">
						Welcome { nombre }!
					</h1>
				</div>
			<p className="header-subtitle">
				Tools and Contacts for F&B traders.
			</p>
		</Fragment>
	)
}

export default Bienvenida;
