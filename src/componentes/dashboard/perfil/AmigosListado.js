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
			<td className="d-none d-sm-block">
				{ usuario.imagen ? (
					<img src={`${process.env.REACT_APP_BACKEND_URL}/${usuario.imagen}`} alt="imagen" width="40" className="img-fluid rounded-circle" />
				) : null }
			</td>
			<td colspan="2">
				{usuario.nombre}
			</td>
			<td colspan="2" className="d-none d-sm-block">
				{usuario.email}
			</td>
			<td>
				<Link 
					to={`/contact-details/${usuario._id}`}
					className="btn btn-info rounded-circle"
				>
					<i className="fas fa-search-plus"></i>
				</Link>
			</td>
		</tr>
	)
}
export default AmigosListado;