import React, { useContext, useState, useEffect, Fragment } from 'react';
import clienteAxios from '../../config/axios';

import '../layout/auth/Header.css';
import Header from '../layout/auth/Header';
import Navegacion from '../layout/auth/Navegacion';
import Bienvenida from '../dashboard/navbar/Bienvenida';
import { CRMContext } from '../../context/CRMContext';

import moment from 'moment';

import Conversor from './Conversor';

function Currencies(props) {
	
	const [auth, guardarAuth] = useContext(CRMContext);

	const [monedas, guardarMonedas] = useState([]);
	const [eur, guardarEur] = useState([]);
	const [usd, guardarUsd] = useState([]);
	const [cad, guardarCad] = useState([]);
	const [hkd, guardarHkd] = useState([]);
	const [isk, guardarIsk] = useState([]);
	const [php, guardarPhp] = useState([]);
	const [huf, guardarHuf] = useState([]); //
	const [czk, guardarCzk] = useState([]);
	const [aud, guardarAud] = useState([]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//console.log('Consultando...');
		const monedasConsulta = await clienteAxios.get('/monedas');
			guardarMonedas(monedasConsulta.data);
		}
		consultarAPI();
	}, [monedas, guardarAuth]);
	
	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//En Base

			const consulta = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=EUR');
      		const respuesta = await consulta.data.rates;
			guardarEur(respuesta);

			const consulta2 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=USD');
      		const respuesta2 = await consulta2.data.rates;
			guardarUsd(respuesta2);

			const consulta3 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=CAD');
      		const respuesta3 = await consulta3.data.rates;
			guardarCad(respuesta3);

			const consulta4 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=HKD');
      		const respuesta4 = await consulta4.data.rates;
			guardarHkd(respuesta4);

			const consulta5 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=ISK');
      		const respuesta5 = await consulta5.data.rates;
			guardarIsk(respuesta5);

			const consulta6 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=PHP');
      		const respuesta6 = await consulta6.data.rates;
			guardarPhp(respuesta6);

			const consulta7 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=HUF');
      		const respuesta7 = await consulta7.data.rates;
			guardarHuf(respuesta7);

			const consulta8 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=CZK');
      		const respuesta8 = await consulta8.data.rates;
			guardarCzk(respuesta8);

			const consulta9 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=AUD');
      		const respuesta9 = await consulta9.data.rates;
			guardarAud(respuesta9);
		}
		consultarAPI();
	}, [eur, usd, cad, hkd, isk, php, huf, czk, aud]);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
		<Fragment>
			<div className="splash">
				<div className="splash-icon">
				</div>
			</div>

			<div className="wrapper">
				<Header />
				<div className="main">
					<Navegacion />
					<div className="content">
						<div className="container-fluid">
							<div className="header">
								<Bienvenida />
							</div>
							
							<div className="row mb-3">
								<div className="d-flex col-12">
									<div className="flex-fill w-100">
										<div className="w-100">
											<h4 className=" px-3 pt-5 text-dark text-uppercase">
												Foreign Exchange Rates with Currency Convertion
											</h4>
											<p className="text-primary">Updated: {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								
								<div className="col-12">
									
									<div className="tab tab-vertical tab-primary">

										<ul className="nav nav-tabs" role="tablist">
											{monedas.map(codigo =>(		
												<li className="nav-item">
													<a className="nav-link" href={`#${codigo.code}`} data-toggle="tab" role="tab">
														{codigo.code}
													</a>
												</li>
											))}
										</ul>

										<div className="tab-content tab-primary">
											{monedas.map(codigo =>(	
												<div className="tab-pane" id={codigo.code} role="tabpanel">
													<h4 className="tab-title">{codigo.name} - {codigo.code} </h4>
														<div className="row">
															{ (codigo.code === 'EUR') ? 
																	monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {eur[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'USD') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {usd[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'CAD') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {cad[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'HKD') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {hkd[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'ISK') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {isk[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'PHP') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {php[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'HUF') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {huf[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'CZK') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {czk[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'AUD') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {aud[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : null }
														</div>
												</div>
											))}
										</div>

									</div>
								
								</div>
							
							</div>

						</div>
					</div>
				</div>
			</div>

			<div className="redux-toastr" aria-live="assertive">
				<div>
					<div className="top-left">
					</div>
					<div className="top-right">
					</div>
					<div className="top-center">
					</div>
					<div className="bottom-left">
					</div>
					<div className="bottom-right">
					</div>
					<div className="bottom-center">
					</div>
				</div>
			</div>		
		</Fragment>
	)

}
export default Currencies;

//Conversor de monedas
//Histórico de las monedas
//Gráficos por ej. usd vs eur