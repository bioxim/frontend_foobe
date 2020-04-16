import React, { useContext, useState, useEffect, Fragment } from 'react';
import clienteAxios from '../../config/axios';

const Conversor = () => {
	
	const [mon, guardarMon] = useState([]);

	let cantidad, monedaTo, monedaFrom;

	const [conversor, guardarConversor] = useState({
		cantidad: '',
		monedaFrom: '',
		monedaTo: ''
	});

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
			//console.log('Consultando...');
		const monConsulta = await clienteAxios.get('/monedas');
			guardarMon(monConsulta.data);
		}
		consultarAPI();
	}, [mon]);

	const calcularMoneda = e => {
            guardarConversor({
                ...conversor,
                [e.target.name]: e.target.value
            })
    }

	return (
		<Fragment>
			<div className="row mb-3">
				<div className="d-flex col-12">
					<div className="flex-fill w-100">
						<div className="w-100">
							<h5 className=" px-3 pt-5 text-dark text-uppercase">
								Currency Convertion
							</h5>
							<h6>
								<small className="text-muted">It corresponds to the last price of the day</small>
							</h6>
							<hr />

							<form className="px-5">
								
								<div className="row d-flex align-items-center">
									<div className="col-12 col-md-6">
										<div className="form-group">
											<label>Quantity</label>
												<input 
													name="cantidad"
													type="number" 
													className="form-control" 
													placeholder="to convert"
													onChange={calcularMoneda}
												/>
										</div>
									</div>
									<div className="col-6 col-md-2">
										<div className="form-group">
											<label>From</label>
				              					<select 
													name="monedaFrom" 
													className="custom-select"
													onChange={calcularMoneda}
												>
													<option selected disabled></option>
													{mon.map(moneda =>(
														<option value={moneda.code}>{moneda.code}</option>
													))}
												</select>
			              				</div>
									</div>
									<div className="col-6 col-md-2">
										<div className="form-group">
											<label>To</label>
				              					<select 
													name="monedaTo" 
													className="custom-select"
													onChange={calcularMoneda}
												>
													<option selected disabled></option>
													{mon.map(moneda =>(
														<option value={moneda.code}>{moneda.code}</option>
													))}
												</select>
			              				</div>
									</div>
									<div className="col col-md-2">
										<div className="form-group">
											<button
												className="btn btn-dark text-white text-uppercase"
												type="submit"
											>
												convert
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				
			</div>
		</Fragment>
	)
}
export default Conversor;