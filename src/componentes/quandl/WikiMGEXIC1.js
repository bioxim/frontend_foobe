import React, { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../config/axios';
import { CRMContext } from '../../context/CRMContext';
import '../views/Styles.css';

import moment from 'moment';

const Wiki = (props) => {
	const [ datos, guardarDatos ] = useState([]);
	const [auth, guardarAuth] = useContext(CRMContext);

	if(!auth.auth) {
		props.history.push('/login');
	}
	
	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

			const datosConsulta = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/MGEX_IC1.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');

      		const respuesta = await datosConsulta.data.dataset;

			guardarDatos(respuesta);
		}
		consultarAPI();
	}, [datos, guardarAuth]);

	return (
		<div className="card">
			<div className="card-header">
				<h6 className="text-dark text-uppercase">{datos.name}</h6>
				<small>{datos.description}</small>
			</div>
			<div className="card-body">
				<div className="row d-flex justify-content-between">
					<p className="text-muted">
						Start date: {moment(`${datos.start_date}`).format('MMMM Do YYYY')} End Date: {moment(`${datos.end_date}`).format('MMMM Do YYYY')}
					</p>
					<small className="text-primary">Last update: {moment(`${datos.refreshed_at}`).format('MMMM Do YYYY')}</small>
				</div>
				<div className="row w-100">
					<table className="table">
						<thead>
							<tr>
								<th>
									{datos.column_names ? datos.column_names[0] : null}
								</th>
								<th>
									{datos.column_names ? datos.column_names[2] : null}
								</th>
								<th>
									{datos.column_names ? datos.column_names[3] : null}
								</th>
								<th>
									{datos.column_names ? datos.column_names[4] : null}
								</th>
							</tr>
						</thead>
						<tbody>
							{datos.data ? datos.data.map(dato => (
								<tr>
									<td>
										<small>{dato[0]}</small>
									</td>
									<td>
										<small>{dato[2]}</small>
									</td>
									<td>
										<small>{dato[3]}</small>
									</td>
									<td>
										<small>{dato[4]}</small>
									</td>
								</tr>
							)): null }	
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)

}
export default Wiki;