import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../../config/axios';
import Pagination from '../../Pagination';

const AmigosListado = ({contacto}) => {
	const [ usuario, guardarUsuario ] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

		const miembroConsulta = await clienteAxios.get(`/clientes/${contacto}`);
			// colocar el resultado en el state
			guardarUsuario(miembroConsulta.data);
		}
		consultarAPI();

	}, [contacto, usuario]);

	return (
		<tr>
			<td className="d-none d-sm-block b-0">
				{ usuario.imagen ? (
					<img src={`${process.env.REACT_APP_BACKEND_URL}/${usuario.imagen}`} alt="imagen" width="40" className="img-fluid rounded-circle" />
				) : null }
			</td>
			<td colspan="2">
				{usuario.nombre}
			</td>
			<td colspan="2">
				{usuario.empresa}
			</td>
			<td>
				<Link 
					to={`/contact-details/${usuario._id}`}
					className="btn"
				>
					<i className="fas fa-search-plus text-info"></i>
				</Link>
			</td>
			<td>
				<Link 
					to={`/messages/${usuario._id}`}
					className="btn"
					data-toggle="tooltip" 
					data-placement="top" 
					title="Send private msg"
				>
					<i className="fas fa-envelope text-success"></i>
				</Link>
			</td>
		</tr>
	)
}
export default AmigosListado;