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

	const [monedas, guardarMonedas] = useState([]),
		  [eur, guardarEur] = useState([]),
		  [usd, guardarUsd] = useState([]),
		  [cad, guardarCad] = useState([]),
		  [hkd, guardarHkd] = useState([]),
		  [isk, guardarIsk] = useState([]),
		  [php, guardarPhp] = useState([]),
		  [huf, guardarHuf] = useState([]), 
		  [czk, guardarCzk] = useState([]),
		  [aud, guardarAud] = useState([]),
		  [ron, guardarRon] = useState([]), 
		  [sek, guardarSek] = useState([]),
		  [idr, guardarIdr] = useState([]),
		  [inr, guardarInr] = useState([]), 
		  [brl, guardarBrl] = useState([]),
		  [rub, guardarRub] = useState([]),
		  [hrk, guardarHrk] = useState([]),
		  [jpy, guardarJpy] = useState([]),
		  [thb, guardarThb] = useState([]), 
		  [chf, guardarChf] = useState([]),
		  [sgd, guardarSgd] = useState([]),//
		  [pln, guardarPln] = useState([]),
		  [bgn, guardarBgn] = useState([]), 
		  [tri, guardarTry] = useState([]),
		  [cny, guardarCny] = useState([]),//
		  [nok, guardarNok] = useState([]),
		  [nzd, guardarNzd] = useState([]), 
		  [zar, guardarZar] = useState([]),
		  [mxn, guardarMxn] = useState([]),//
		  [ils, guardarIls] = useState([]), 
		  [gbp, guardarGbp] = useState([]),
		  [krw, guardarKrw] = useState([]),//
		  [myr, guardarMyr] = useState([]);


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
		}
		consultarAPI();
	}, [eur, usd, cad, hkd]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			const consulta5 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=ISK');
      		const respuesta5 = await consulta5.data.rates;
			guardarIsk(respuesta5);

			const consulta6 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=PHP');
      		const respuesta6 = await consulta6.data.rates;
			guardarPhp(respuesta6);

			const consulta7 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=HUF');
      		const respuesta7 = await consulta7.data.rates;
			guardarHuf(respuesta7);
		}
		consultarAPI();
	}, [isk, php, huf]);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			const consulta8 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=CZK');
      		const respuesta8 = await consulta8.data.rates;
			guardarCzk(respuesta8);

			const consulta9 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=AUD');
      		const respuesta9 = await consulta9.data.rates;
			guardarAud(respuesta9);

			const consulta10 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=RON');
      		const respuesta10 = await consulta10.data.rates;
			guardarRon(respuesta10);

			const consulta11 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=SEK');
      		const respuesta11 = await consulta11.data.rates;
			guardarSek(respuesta11);
		}
		consultarAPI();
	}, [czk, aud, ron, sek]);

	useEffect( () => {
		const consultarAPI = async () => {
			const consulta12 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=IDR');
      		const respuesta12 = await consulta12.data.rates;
			guardarIdr(respuesta12);

			const consulta13 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=INR');
      		const respuesta13 = await consulta13.data.rates;
			guardarInr(respuesta13);

			const consulta14 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=BRL');
      		const respuesta14 = await consulta14.data.rates;
			guardarBrl(respuesta14);

			const consulta15 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=RUB');
      		const respuesta15 = await consulta15.data.rates;
			guardarRub(respuesta15);
		}
		consultarAPI();
	}, [idr, inr, brl, rub]);

	useEffect( () => {
		const consultarAPI = async () => {
			const consulta16 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=HRK');
      		const respuesta16 = await consulta16.data.rates;
			guardarHrk(respuesta16);

			const consulta17 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=JPY');
      		const respuesta17 = await consulta17.data.rates;
			guardarJpy(respuesta17);

			const consulta18 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=THB');
      		const respuesta18 = await consulta18.data.rates;
			guardarThb(respuesta18);

			const consulta19 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=CHF');
      		const respuesta19 = await consulta19.data.rates;
			guardarChf(respuesta19);
		}
		consultarAPI();
	}, [hrk, jpy, thb, chf]);

	useEffect( () => {
		const consultarAPI = async () => {
			const consulta20 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=SGD');
      		const respuesta20 = await consulta20.data.rates;
			guardarSgd(respuesta20);

			const consulta21 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=PLN');
      		const respuesta21 = await consulta21.data.rates;
			guardarPln(respuesta21);

			const consulta22 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=BGN');
      		const respuesta22 = await consulta22.data.rates;
			guardarBgn(respuesta22);

			const consulta23 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=TRY');
      		const respuesta23 = await consulta23.data.rates;
			guardarTry(respuesta23);
		}
		consultarAPI();
	}, [sgd, pln, bgn, tri]);

	useEffect( () => {
		const consultarAPI = async () => {
			const consulta24 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=CNY');
      		const respuesta24 = await consulta24.data.rates;
			guardarCny(respuesta24);

			const consulta25 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=NOK');
      		const respuesta25 = await consulta25.data.rates;
			guardarNok(respuesta25);

			const consulta26 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=NZD');
      		const respuesta26 = await consulta26.data.rates;
			guardarNzd(respuesta26);

			const consulta27 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=ZAR');
      		const respuesta27 = await consulta27.data.rates;
			guardarZar(respuesta27);
		}
		consultarAPI();
	}, [cny, nok, nzd, zar]);

	useEffect( () => {
		const consultarAPI = async () => {
			const consulta28 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=MXN');
      		const respuesta28 = await consulta28.data.rates;
			guardarMxn(respuesta28);

			const consulta29 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=ILS');
      		const respuesta29 = await consulta29.data.rates;
			guardarIls(respuesta29);

			const consulta30 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=GBP');
      		const respuesta30 = await consulta30.data.rates;
			guardarGbp(respuesta30);
		}
		consultarAPI();
	}, [mxn, ils, gbp]);

	useEffect( () => {
		const consultarAPI = async () => {

			const consulta31 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=KRW');
      		const respuesta31 = await consulta31.data.rates;
			guardarKrw(respuesta31);

			const consulta32 = await clienteAxios.get('https://api.exchangeratesapi.io/latest?base=MYR');
      		const respuesta32 = await consulta32.data.rates;
			guardarMyr(respuesta32);
		}
		consultarAPI();
	}, [krw, myr]);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
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

										<ul className="nav nav-tabs pb-3" role="tablist">
											<li className="nav-item">
													<a className="nav-link p-0 mx-2" href="#EUR" data-toggle="tab" role="tab">
													</a>
											</li>
											{monedas.map(codigo =>(		
												<li className="nav-item">
													<a className="nav-link p-0 mx-2" href={`#${codigo.code}`} data-toggle="tab" role="tab">
														{codigo.code}
													</a>
												</li>
											))}
										</ul>

										<div className="tab-content tab-primary">

											<div className="tab-pane active" id="#EUR" role="tabpanel">
														<h4 className="tab-title">Euro - EUR </h4>
														
														<div className="row">
															
															{monedas.map(codigo =>(	
																(codigo.code === 'EUR') ? 
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
																	)) : null ))}
														</div>
											</div>

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
																	)) : 
															  (codigo.code === 'RON') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {ron[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'SEK') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {sek[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'IDR') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {idr[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'INR') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {inr[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'BRL') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {brl[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'RUB') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {rub[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'HRK') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {hrk[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'JPY') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {jpy[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'THB') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {thb[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'CHF') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {chf[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'SGD') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {sgd[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'PLN') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {pln[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'BGN') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {bgn[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'TRY') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {tri[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'CNY') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {cny[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'NOK') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {nok[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'NZD') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {nzd[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'ZAR') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {zar[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'MXN') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {mxn[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'ILS') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {ils[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) :
															  (codigo.code === 'GBP') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {gbp[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'KRW') ?
															  		monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {krw[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																	)) : 
															  (codigo.code === 'MYR') ?
															  			monedas.map(mon =>(
																			<div className="col-6 col-sm-4 col-md-3 mb-1">
																				<div className="card flex-fill w-100 bg-light">
																					<div className=" pt-1 text-center">
																						<h5 className="text-uppercase font-weight-bold text-dark">
																							{mon.code}
																						</h5>
																						<h6 className="text-uppercase text-muted">
																							{mon.symbol} {myr[mon.code]}
																						</h6>
																					</div>
																				</div>
																			</div>
																		)) : null }
														</div>
													</div>
											))}
										</div>
										<Conversor />
									</div>
								
								</div>
							
							</div>

						</div>
					</div>
				</div>
			</div>
	)

}
export default Currencies;

//Histórico de las monedas
//Gráficos por ej. usd vs eur