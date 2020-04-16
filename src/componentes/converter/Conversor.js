import React, { useContext, useState, useEffect, Fragment } from 'react';
import clienteAxios from '../../config/axios';

const Conversor = () => {

	let cantidad, monedaTo, monedaFrom;

	const [conversor, guardarConversor] = useState({
		cantidad: '',
		monedaFrom: '',
		monedaTo: ''
	});

	const [con, guardarConsulta] = useState([]);

	const calcularMoneda = e => {
            guardarConversor({
                ...conversor,
                [e.target.name]: e.target.value
            })
    }

    const validarBoton = () => {
		// Destructuring
		const { cantidad, monedaTo, monedaFrom } = conversor;

		let valido = !cantidad.length && !monedaFrom && !monedaTo;
		return valido;
	}

    const convertidor = async () => {
    	//console.log(conversor); Me toma perfecto el objeto conversor
    	//llamar a el par de bases
    	const consulta = await clienteAxios.get(`https://api.exchangeratesapi.io/latest?symbols=${conversor.monedaFrom},${conversor.monedaTo}`);
			guardarConsulta(consulta.data);
		}

    console.log({con});

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
													min="0" 
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
													<option value=""></option>
													<option value="EUR">EUR</option>
													<option value="USD">USD</option>
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
													<option value=""></option>
													<option value="EUR">EUR</option>
													<option value="USD">USD</option>
												</select>
			              				</div>
									</div>
									<div className="col col-md-2">
										<div className="form-group">
											<button
												className="btn btn-dark text-white text-uppercase"
												type="submit"
												disabled={ validarBoton() }
												onClick={() => convertidor()}
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