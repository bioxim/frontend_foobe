import React, { useContext } from 'react';
import clienteAxios from '../../config/axios';
import { CRMContext } from '../../context/CRMContext';

import '../layout/auth/Header.css';

const Conversor = (props) => {

	const [auth, guardarAuth] = useContext(CRMContext);
	
	return (
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
							
							<div className="row">
								<div className="col-6 col-md-6">
									<div className="form-group">
										<input 
											name="valoruno"
											type="number" 
											className="form-control" 
											placeholder="to convert"
										/>
									</div>
								</div>
								<div className="col-6 col-md-4">
									<div className="form-group">
		              					<select 
		              						className="custom-select bg-secondary"
		              						name="moneda"
		              					>
		              						<option selected disabled>-- Choose Currency --</option>
		              					
												<option></option>
										
		              					</select>
		              				</div>
								</div>
							</div>

							<div className="row">
								<div className="col-6 col-md-6">
									<div className="form-group">
										<input 
											name="respuesta"
											type="number" 
											className="form-control" 
											placeholder="to convert"
										/>
									</div>
								</div>
								<div className="col-6 col-md-4">
									<div className="form-group">
		              					<select 
		              						className="custom-select bg-secondary"
		              						name="monedados"
		              					>
		              						<option selected disabled>-- Choose Currency --</option>
		              						
												<option></option>
										
		              					</select>
		              				</div>
								</div>
							</div>

						</form>

					</div>
				</div>
			</div>
		</div>
	)
}
export default Conversor;