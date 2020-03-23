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
	
	// Extraigo todas las cotizaciones del día de acuerdo a las bases
	const [eur, guardarEur] = useState([]);
	const [usd, guardarUsd] = useState([]);
	const [cad, guardarCad] = useState([]);
	const [hkd, guardarHkd] = useState([]);
	
	const [isk, guardarIsk] = useState([]);
	const [php, guardarPhp] = useState([]);
	const [ddk, guardarDdk] = useState([]); // czk
	const [huf, guardarHuf] = useState([]);

	const [aud, guardarAud] = useState([]);
	const [ron, guardarRon] = useState([]);
	const [sek, guardarSek] = useState([]); 
	const [idr, guardarIdr] = useState([]);
	
	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//En Base Euro
			const consultaEur = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=EUR');
      		const respuestaEur = await consultaEur.data.rates;
			guardarEur(respuestaEur);

			//En base USD
			const consultaUsd = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=USD');
      		const respuestaUsd = await consultaUsd.data.rates;
			guardarUsd(respuestaUsd);

			//En base CAD
			const consultaCad = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=CAD');
      		const respuestaCad = await consultaCad.data.rates;
			guardarCad(respuestaCad);

			//En base CAD
			const consultaHkd = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=HKD');
      		const respuestaHkd = await consultaHkd.data.rates;
			guardarHkd(respuestaHkd);
		}
		consultarAPI();
	}, [eur, usd, cad, hkd, guardarAuth]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

			const consultaIsk = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=ISK');
      		const respuestaIsk = await consultaIsk.data.rates;
			guardarIsk(respuestaIsk);

			const consultaPhp = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=PHP');
      		const respuestaPhp = await consultaPhp.data.rates;
			guardarPhp(respuestaPhp);

			const consultaDdk = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=CZK');
      		const respuestaDdk = await consultaDdk.data.rates;
			guardarDdk(respuestaDdk);

			const consultaHuf = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=HUF');
      		const respuestaHuf = await consultaHuf.data.rates;
			guardarHuf(respuestaHuf);
		}
		consultarAPI();
	}, [isk, php, ddk, huf]); // ddk = czk

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

			const consultaAud = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=AUD');
      		const respuestaAud = await consultaAud.data.rates;
			guardarAud(respuestaAud);

			const consultaRon = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=RON');
      		const respuestaRon = await consultaRon.data.rates;
			guardarRon(respuestaRon);

			const consultaSek = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=SEK');
      		const respuestaSek = await consultaSek.data.rates;
			guardarSek(respuestaSek);

			const consultaIdr = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=IDR');
      		const respuestaIdr = await consultaIdr.data.rates;
			guardarIdr(respuestaIdr);
		}
		consultarAPI();
	}, [aud, ron, sek, idr]);

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
								<div className="d-flex col-12">
									<div className="flex-fill w-100">
										<div className="w-100 d-flex">	
											<div className="col-12">
												<div className="tab tab-success">
													
													<ul className="nav nav-tabs" role="tablist">
														<li className="nav-item">
															<a className="nav-link active" href="#eur" data-toggle="tab" role="tab" aria-selected="true">
																EUR
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#usd" data-toggle="tab" role="tab" aria-selected="false">
																USD
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#cad" data-toggle="tab" role="tab" aria-selected="false">
					            								CAD
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#hkd" data-toggle="tab" role="tab" aria-selected="false">
					            								HKD
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#isk" data-toggle="tab" role="tab" aria-selected="false">
					            								ISK
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#php" data-toggle="tab" role="tab" aria-selected="false">
					            								PHP
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#czk" data-toggle="tab" role="tab" aria-selected="false">
					            								CZK
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#huf" data-toggle="tab" role="tab" aria-selected="false">
					            								HUF
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#aud" data-toggle="tab" role="tab" aria-selected="false">
					            								AUD
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#ron" data-toggle="tab" role="tab" aria-selected="false">
					            								RON
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#sek" data-toggle="tab" role="tab" aria-selected="false">
					            								SEK
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#idr" data-toggle="tab" role="tab" aria-selected="false">
					            								IDR
					          								</a>
														</li>
													</ul>
													
													<div className="tab-content">
														
														<div className="tab-pane active" id="eur" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>
														
														</div>
														
														<div className="tab-pane" id="usd" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="cad" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{cad['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="hkd" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{hkd['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="isk" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{isk['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="php" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{php['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="czk" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ddk['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="huf" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{huf['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="aud" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{aud['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="ron" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{ron['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="sek" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				IDR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['IDR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{sek['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

														<div className="tab-pane" id="idr" role="tabpanel">
															
															<div className="row mb-5">

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				EUR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['EUR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				USD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['USD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CAD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['CAD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HKD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['HKD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ISK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['ISK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PHP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['PHP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CZK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['CZK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HUF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['HUF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				AUD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['AUD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RON
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['RON']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SEK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['SEK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				INR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['INR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BRL
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['BRL']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				RUB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['RUB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				HRK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['HRK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				JPY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['JPY']}
																			</h6>
																		</div>
																	</div>
																</div>
																
																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				THB
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['THB']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CHF
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['CHF']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				SGD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['SGD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				PLN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['PLN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				BGN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['BGN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				TRY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['TRY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				CNY
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['CNY']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NOK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['NOK']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				NZD
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['NZD']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ZAR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['ZAR']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MXN
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['MXN']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				ILS
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['ILS']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				GBP
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['GBP']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				KRW
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['KRW']}
																			</h6>
																		</div>
																	</div>
																</div>

																<div className="d-flex col-4 col-sm-3 col-md-2 col-xl-1 mb-1">
																	<div className="card flex-fill w-100">
																		<div className=" pt-1 text-center">
																			<h5 className="text-uppercase font-weight-bold text-dark">
																				MYR
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{idr['MYR']}
																			</h6>
																		</div>
																	</div>
																</div>
															</div>

														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<Conversor />

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