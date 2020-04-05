import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';
// context
import { CRMContext } from '../../context/CRMContext';

import './login.css';

function Login(props) {
	// Auth y token
	const [auth, guardarAuth] = useContext(CRMContext);
	// State con los datos del formulario
	const [credenciales, guardarCredenciales] = useState({});
	// iniciar sesión en el servidor
	const iniciarSesion = async e => {
		e.preventDefault();
		try {

			const respuesta = await clienteAxios.post('/login', credenciales);

			const { token } = respuesta.data;
			localStorage.setItem('token', token);

			guardarAuth({
				token,
				auth: true,
				credenciales
			})

			// alerta
			Swal.fire(
				'Login Success',
				'Login Success',
				'success'
			)

			// redireccionar
			props.history.push('/dashboard');

		} catch(error) {
			//console.log(error);

			if(error.response) {
				Swal.fire({
					type: 'error',
					title: 'Hubo un error',
					text: error.response.data.mensaje
				})
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Something went wrong',
					text: 'Something went wrong'
				})
			}
			
		}
	}

	// almacenar lo que el usuario escribe en el state
	const leerDatos = e => {
		guardarCredenciales({
			...credenciales,
			[e.target.name]: e.target.value
		})
	}

	return (
			<div className="color-fondo">
				<div id="root">
					<div className="main h-100 w-100">
						<div className="h-100 container">
							<div className="h-100 row">
								<div className="mx-auto d-table h-100 col-sm-10 col-md-8 col-lg-6">
									<div className="d-table-cell align-middle">
										<div className="text-center mt-4">
											<h2>Welcome back to Foobe</h2>
												<p className="lead">Sign in to your account to continue
												</p>
										</div>
										<form 
											className="card"
											onSubmit={iniciarSesion}
										>
											<div className="card-body">
												<div className="m-sm-4">
													<div className="text-center">
														<img src="img/avatar-static.jpg" alt="Login" className="img-fluid rounded-circle" width="132" height="132" />
													</div>
													<form>
														<div className="form-group">
															<label>Email</label>
															<input 	name="email" 
																	placeholder="Enter your email" 
																	type="text" 
																	className="form-control-lg form-control" 
																	required
																	onChange={leerDatos}
															/>
														</div>
														<div className="form-group">
															<label>Password</label>
															<input 	name="password" 
																	placeholder="Enter your password"
																	type="password"
																	className="form-control-lg form-control" 
																	required
																	onChange={leerDatos}
															/>
															<small>
																<Link to={"/contact-details"}>
																	Forgot password?
																</Link>
															</small>
														</div>
														<div className="text-center mt-3">
															<input 
																className="btn btn-primary btn-lg"
																type="submit"
																value="Login"
															/>
														</div>
													</form>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}

export default withRouter(Login);