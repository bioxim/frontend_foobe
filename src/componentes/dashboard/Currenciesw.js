import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import { CRMContext } from '../../context/CRMContext';

import moment from 'moment';

const Currenciesw = (props) => {
	const [ datos, guardarDatos ] = useState([]);

	const [auth, guardarAuth] = useContext(CRMContext);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//En Base Euro
			const datosConsulta = await clienteAxios.get('https://api.exchangeratesapi.io/latest');
      		const respuesta = await datosConsulta.data.rates;
			guardarDatos(respuesta);
		}
		consultarAPI();
	}, [datos, guardarAuth]);

	const cad = datos['CAD'];
	const hdk = datos['HKD'];
	const isk = datos['ISK'];
	const php = datos['PHP'];
	const dkk = datos['DKK']; // 5
	const huf = datos['HUF'];
	const czk = datos['CZK'];
	const aud = datos['AUD'];
	const ron = datos['RON'];
	const sek = datos['SEK']; // 10
	const idr = datos['IDR'];
	const inr = datos['INR']; // 12
	const brl = datos['BRL'];
	const rub = datos['RUB'];
	const hrk = datos['HRK']; // 15
	const jpy = datos['JPY'];
	const thb = datos['THB'];
	const chf = datos['CHF'];
	const sgd = datos['SGD'];
	const pln = datos['PLN']; // 20
	const bgn = datos['BGN'];
	const tri = datos['TRY'];
	const cny = datos['CNY'];
	const nok = datos['NOK'];
	const nzd = datos['NZD']; // 25
	const zar = datos['ZAR'];
	const usd = datos['USD'];
	const mxn = datos['MXN'];
	const ils = datos['ILS'];
	const gbp = datos['GBP']; // 30
	const krw = datos['KRW'];
	const myr = datos['MYR'];

	// Para pedirlo de acuerdo a la base solicitada (cuando me salga)
	const base = [
					'EUR',
					'USD',
					'CAD',
					'HKD',
					'ISK',
					'PHP',
					'DKK',
					'HUF',
					'CZK',
					'AUD',
					'RON',
					'SEK',
					'IDR',
					'INR',
					'BRL',
					'RUB',
					'HRK',
					'JPY',
					'THB',
					'CHF',
					'SGD',
					'PLN',
					'BGN',
					'TRY',
					'CNY',
					'NOK',
					'NZD',
					'ZAR',
					'MXN',
					'ILS',
					'GBP',
					'KRW',
					'MYR'
				];

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
		<Fragment>
			
			<div className="row mb-3">
				<div className="d-flex col-12">
					<div className="flex-fill w-100">
						<div className="w-100">
							<h4 className=" px-3 pt-5 text-dark text-uppercase">
								Latest foreign exchange reference rates
							</h4>
							<hr className="border-gray-300 my-6" />
							<h6>
								Rates are quoted against the Euro <i className="fas fa-euro-sign"></i> by default.
							</h6>
						</div>
					</div>
				</div>
			</div>
			
			<div className="row mb-3">
				<div className="d-flex col-12">
					<div className="flex-fill w-100">
						<div className="w-100 d-flex justify-content-between">
							<Link
								className="btn btn-small btn-primary"
								to={"/currencies"}
							>
								<i className="fas fa-coins mr-2"></i> Go to foreign exchange tool
							</Link>
							<p className="text-primary">Updated: {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="row mb-5">

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/usa.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								USD
							</h5>
							<h6 className="text-uppercase text-muted">
								{usd}
							</h6>
						</div>
					</div>
				</div>
				
				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/can.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								CAD
							</h5>
							<h6 className="text-uppercase text-muted">
								{cad}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/hkg.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								HDK
							</h5>
							<h6 className="text-uppercase text-muted">
								{hdk}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/isl.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								ISK
							</h5>
							<h6 className="text-uppercase text-muted">
								{isk}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/phl.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								PHP
							</h5>
							<h6 className="text-uppercase text-muted">
								{php}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/dnk.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								DKK
							</h5>
							<h6 className="text-uppercase text-muted">
								{dkk}
							</h6>
						</div>
					</div>
				</div>
			
				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/hun.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								HUF
							</h5>
							<h6 className="text-uppercase text-muted">
								{huf}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/cze.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								CZK
							</h5>
							<h6 className="text-uppercase text-muted">
								{czk}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/aus.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								AUD
							</h5>
							<h6 className="text-uppercase text-muted">
								{aud}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/rou.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								RON
							</h5>
							<h6 className="text-uppercase text-muted">
								{ron}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/swe.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								SEK
							</h5>
							<h6 className="text-uppercase text-muted">
								{sek}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/idn.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								IDR
							</h5>
							<h6 className="text-uppercase text-muted">
								{idr}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/ind.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								INR
							</h5>
							<h6 className="text-uppercase text-muted">
								{inr}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/bra.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								BRL
							</h5>
							<h6 className="text-uppercase text-muted">
								{brl}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/rus.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								RUB
							</h5>
							<h6 className="text-uppercase text-muted">
								{rub}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/hrv.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								HRK
							</h5>
							<h6 className="text-uppercase text-muted">
								{hrk}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/jpn.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								JPY
							</h5>
							<h6 className="text-uppercase text-muted">
								{jpy}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/tha.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								THB
							</h5>
							<h6 className="text-uppercase text-muted">
								{thb}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/che.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								CHF
							</h5>
							<h6 className="text-uppercase text-muted">
								{chf}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/brn.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								SGD
							</h5>
							<h6 className="text-uppercase text-muted">
								{sgd}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/pol.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								PLN
							</h5>
							<h6 className="text-uppercase text-muted">
								{pln}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/bgr.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								BGN
							</h5>
							<h6 className="text-uppercase text-muted">
								{bgn}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/tur.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								TRY
							</h5>
							<h6 className="text-uppercase text-muted">
								{tri}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/chn.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								CNY
							</h5>
							<h6 className="text-uppercase text-muted">
								{cny}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/nor.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								NOK
							</h5>
							<h6 className="text-uppercase text-muted">
								{nok}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/nzl.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								NZD
							</h5>
							<h6 className="text-uppercase text-muted">
								{nzd}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/zaf.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								ZAR
							</h5>
							<h6 className="text-uppercase text-muted">
								{zar}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/mex.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								MXN
							</h5>
							<h6 className="text-uppercase text-muted">
								{mxn}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/isr.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								ILS
							</h5>
							<h6 className="text-uppercase text-muted">
								{ils}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/gbr.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								GBP
							</h5>
							<h6 className="text-uppercase text-muted">
								{gbp}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/kor.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								KRW
							</h5>
							<h6 className="text-uppercase text-muted">
								{krw}
							</h6>
						</div>
					</div>
				</div>

				<div className="d-flex col-6 col-sm-4 col-md-3 col-xl-2">
					<div className="card flex-fill w-100 bg-light">
						<div className=" pt-1 text-center">
							<h5 className="text-uppercase font-weight-bold text-dark">
								<img src="https://restcountries.eu/data/mys.svg" className="img-fluid rounded-circle mr-2" width="20" /> 
								MYR
							</h5>
							<h6 className="text-uppercase text-muted">
								{myr}
							</h6>
						</div>
					</div>
				</div>

			</div>

		</Fragment>
	)
}

export default Currenciesw;