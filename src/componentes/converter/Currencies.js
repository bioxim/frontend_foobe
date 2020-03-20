import React, { useContext, useState, useEffect, Fragment } from 'react';
import clienteAxios from '../../config/axios';

import '../layout/auth/Header.css';
import Header from '../layout/auth/Header';
import Navegacion from '../layout/auth/Navegacion';
import Bienvenida from '../dashboard/navbar/Bienvenida';
import { CRMContext } from '../../context/CRMContext';

import moment from 'moment';

function Currencies(props) {
	
	const [auth, guardarAuth] = useContext(CRMContext);
	
	// Extraigo todas las cotizaciones del día de acuerdo a las bases
	const [eur, guardarEur] = useState([]);
	const [usd, guardarUsd] = useState([]);
	const [cad, guardarCad] = useState([]);
	
	const base = ['EUR','USD','CAD','HKD','ISK','PHP','DKK','HUF','CZK','AUD','RON','SEK',
					'IDR','INR','BRL','RUB','HRK','JPY','THB','CHF','SGD','PLN','BGN','TRY','CNY','NOK','NZD','ZAR','MXN','ILS','GBP','KRW','MYR'];
	
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
		}
		consultarAPI();
	}, [eur, usd, cad, guardarAuth]);

	console.log({eur});

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
															<a className="nav-link active" href="#colored-icon-1" data-toggle="tab" role="tab" aria-selected="true">
																EUR
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#colored-icon-2" data-toggle="tab" role="tab" aria-selected="false">
																USD
					          								</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#colored-icon-3" data-toggle="tab" role="tab" aria-selected="false">
					            								CAD
					          								</a>
														</li>
													</ul>
													
													<div className="tab-content">
														//Panel 1: BASE EURO
														<div className="tab-pane active" id="colored-icon-1" role="tabpanel">
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
																				DKK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{eur['DKK']}
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
														//Panel 2: BASE USD
														<div class="tab-pane" id="colored-icon-2" role="tabpanel">
															
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
																				DKK
																			</h5>
																			<h6 className="text-uppercase text-muted">
																				{usd['DKK']}
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
														<div class="tab-pane" id="colored-icon-3" role="tabpanel">
															<h4 class="tab-title">One more</h4>
															<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean massa. Cum sociis natoque
																penatibus et magnis neque dis parturient montes, nascetur ridiculus mus.</p>
															<p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
																eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
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