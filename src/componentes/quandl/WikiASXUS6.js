import React, { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../config/axios';
import { CRMContext } from '../../context/CRMContext';
import '../views/Styles.css';

import moment from 'moment';

// Sorghum

const Wiki = (props) => {
	
	const [ datos, guardarDatos ] = useState([]);
	const [ datosDos, guardarDatosDos ] = useState([]);
	const [ datosTres, guardarDatosTres ] = useState([]);
	const [ datosCuatro, guardarDatosCuatro ] = useState([]);
	const [ datosCinco, guardarDatosCinco ] = useState([]);
	const [ datosSeis, guardarDatosSeis ] = useState([]);

	const [auth, guardarAuth] = useContext(CRMContext);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

			const datosConsulta = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/ASX_US6.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');
      		const respuesta = await datosConsulta.data.dataset;

      		const datosConsulta2 = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/ASX_US5.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');
      		const respuesta2 = await datosConsulta2.data.dataset;

      		const datosConsulta3 = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/ASX_US4.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');
      		const respuesta3 = await datosConsulta3.data.dataset;

			guardarDatos(respuesta);
			guardarDatosDos(respuesta2);
			guardarDatosTres(respuesta3);

		}
		consultarAPI();
	}, [datos, datosDos, datosTres, guardarAuth]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

			const datosConsulta = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/ASX_US6.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');
      		const respuesta = await datosConsulta.data.dataset;

      		const datosConsulta2 = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/ASX_US5.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');
      		const respuesta2 = await datosConsulta2.data.dataset;

      		const datosConsulta3 = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/ASX_US4.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');
      		const respuesta3 = await datosConsulta3.data.dataset;

      		const datosConsulta4 = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/ASX_US3.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');
      		const respuesta4 = await datosConsulta4.data.dataset;

      		const datosConsulta5 = await clienteAxios.get('https://www.quandl.com/api/v3/datasets/CHRIS/ASX_US2.json?start_date=2020-02-15&end_date=2020-05-17&api_key=PaVTvJcxhxsypQDK-1Fn');
      		const respuesta5 = await datosConsulta5.data.dataset;

			guardarDatos(respuesta);
			guardarDatosDos(respuesta2);
			guardarDatosTres(respuesta3);
			guardarDatosCuatro(respuesta4);
			guardarDatosCinco(respuesta5);

		}
		consultarAPI();
	}, [datos, datosDos, datosTres, datosCuatro, datosCinco, guardarAuth]);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return(
		<div className="accordion" id="accordionExample">
			
			<div className="card">
				<div className="card-header" id="headingOne">
					<button 
						className="btn btn-success" 
						type="button" 
						data-toggle="collapse" 
						data-target="#collapseOne" 
						aria-expanded="true" 
						aria-controls="collapseOne"
					>
						<h6 className="text-dark text-uppercase">{datos.name}</h6>
					<small>{datos.description}</small>
					</button>
				</div>
				<div 
					id="collapseOne" 
					className="collapse" 
					aria-labelledby="headingOne" 
					data-parent="#accordionExample"
				>
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
											{datos.column_names ? datos.column_names[1] : null}
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
												<small>{dato[1]}</small>
											</td>
										</tr>
									)): null }	
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="card-header" id="headingTwo">
					<button 
						className="btn btn-success" 
						type="button" 
						data-toggle="collapse" 
						data-target="#collapseTwo" 
						aria-expanded="true" 
						aria-controls="collapseTwo"
					>
						<h6 className="text-dark text-uppercase">{datosDos.name}</h6>
					<small>{datosDos.description}</small>
					</button>
				</div>
				<div 
					id="collapseTwo" 
					className="collapse" 
					aria-labelledby="headingTwo" 
					data-parent="#accordionExample"
				>
					<div className="card-body">
						<div className="row d-flex justify-content-between">
							<p className="text-muted">
								Start date: {moment(`${datosDos.start_date}`).format('MMMM Do YYYY')} End Date: {moment(`${datosDos.end_date}`).format('MMMM Do YYYY')}
							</p>
							<small className="text-primary">Last update: {moment(`${datosDos.refreshed_at}`).format('MMMM Do YYYY')}</small>
						</div>
						<div className="row w-100">
							<table className="table">
								<thead>
									<tr>
										<th>
											{datosDos.column_names ? datosDos.column_names[0] : null}
										</th>
										<th>
											{datosDos.column_names ? datosDos.column_names[1] : null}
										</th>
									</tr>
								</thead>
								<tbody>
									{datosDos.data ? datosDos.data.map(dato => (
										<tr>
											<td>
												<small>{dato[0]}</small>
											</td>
											<td>
												<small>{dato[1]}</small>
											</td>
										</tr>
									)): null }	
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="card-header" id="headingThree">
					<button 
						className="btn btn-success" 
						type="button" 
						data-toggle="collapse" 
						data-target="#collapseThree" 
						aria-expanded="true" 
						aria-controls="collapseThree"
					>
						<h6 className="text-dark text-uppercase">{datosTres.name}</h6>
					<small>{datosTres.description}</small>
					</button>
				</div>
				<div 
					id="collapseThree" 
					className="collapse" 
					aria-labelledby="headingThree" 
					data-parent="#accordionExample"
				>
					<div className="card-body">
						<div className="row d-flex justify-content-between">
							<p className="text-muted">
								Start date: {moment(`${datosTres.start_date}`).format('MMMM Do YYYY')} End Date: {moment(`${datosTres.end_date}`).format('MMMM Do YYYY')}
							</p>
							<small className="text-primary">Last update: {moment(`${datosTres.refreshed_at}`).format('MMMM Do YYYY')}</small>
						</div>
						<div className="row w-100">
							<table className="table">
								<thead>
									<tr>
										<th>
											{datosTres.column_names ? datosTres.column_names[0] : null}
										</th>
										<th>
											{datosTres.column_names ? datosTres.column_names[1] : null}
										</th>
									</tr>
								</thead>
								<tbody>
									{datosTres.data ? datosTres.data.map(dato => (
										<tr>
											<td>
												<small>{dato[0]}</small>
											</td>
											<td>
												<small>{dato[1]}</small>
											</td>
										</tr>
									)): null }	
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="card-header" id="headingFour">
					<button 
						className="btn btn-success" 
						type="button" 
						data-toggle="collapse" 
						data-target="#collapseFour" 
						aria-expanded="true" 
						aria-controls="collapseFour"
					>
						<h6 className="text-dark text-uppercase">{datosCuatro.name}</h6>
					<small>{datosCuatro.description}</small>
					</button>
				</div>
				<div 
					id="collapseFour" 
					className="collapse" 
					aria-labelledby="headingFour" 
					data-parent="#accordionExample"
				>
					<div className="card-body">
						<div className="row d-flex justify-content-between">
							<p className="text-muted">
								Start date: {moment(`${datosCuatro.start_date}`).format('MMMM Do YYYY')} End Date: {moment(`${datosCuatro.end_date}`).format('MMMM Do YYYY')}
							</p>
							<small className="text-primary">Last update: {moment(`${datosCuatro.refreshed_at}`).format('MMMM Do YYYY')}</small>
						</div>
						<div className="row w-100">
							<table className="table">
								<thead>
									<tr>
										<th>
											{datosCuatro.column_names ? datosCuatro.column_names[0] : null}
										</th>
										<th>
											{datosCuatro.column_names ? datosCuatro.column_names[1] : null}
										</th>
									</tr>
								</thead>
								<tbody>
									{datosCuatro.data ? datosCuatro.data.map(dato => (
										<tr>
											<td>
												<small>{dato[0]}</small>
											</td>
											<td>
												<small>{dato[1]}</small>
											</td>
										</tr>
									)): null }	
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="card-header" id="headingFive">
					<button 
						className="btn btn-success" 
						type="button" 
						data-toggle="collapse" 
						data-target="#collapseFive" 
						aria-expanded="true" 
						aria-controls="collapseFive"
					>
						<h6 className="text-dark text-uppercase">{datosCinco.name}</h6>
					<small>{datosCinco.description}</small>
					</button>
				</div>
				<div 
					id="collapseFive" 
					className="collapse" 
					aria-labelledby="headingFive" 
					data-parent="#accordionExample"
				>
					<div className="card-body">
						<div className="row d-flex justify-content-between">
							<p className="text-muted">
								Start date: {moment(`${datosCinco.start_date}`).format('MMMM Do YYYY')} End Date: {moment(`${datosCinco.end_date}`).format('MMMM Do YYYY')}
							</p>
							<small className="text-primary">Last update: {moment(`${datosCinco.refreshed_at}`).format('MMMM Do YYYY')}</small>
						</div>
						<div className="row w-100">
							<table className="table">
								<thead>
									<tr>
										<th>
											{datosCinco.column_names ? datosCinco.column_names[0] : null}
										</th>
										<th>
											{datosCinco.column_names ? datosCinco.column_names[1] : null}
										</th>
									</tr>
								</thead>
								<tbody>
									{datosCinco.data ? datosCinco.data.map(dato => (
										<tr>
											<td>
												<small>{dato[0]}</small>
											</td>
											<td>
												<small>{dato[1]}</small>
											</td>
										</tr>
									)): null }	
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
export default Wiki;