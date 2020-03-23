import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../../config/axios';

import moment from 'moment';

function EditarPerfil({miembros}, props) {

	const { _id } = miembros;

	const [miembro, guardarMiembro] = useState({
		linkedin: '',
		twitter: '',
		facebook: '',
		instagram: ''
	});

	const editarMiembro = e => {
		e.preventDefault();

		// enviar petición por axios
		clienteAxios.put(`/clientes/editar/${_id}`, miembro)
			.then(res => {
				//console.log(res);
				if(res.status === 200) {
                Swal.fire(
                    'Profile Up-to-date :)',
                    res.data.mensaje,
                    'success'
                )
            } else {
		            Swal.fire({
		            	type:'error',
		                title: 'Error',
		                text: 'Please, try again'
		            })
				}
			})
	}

    // leer los datos del formulario
    const leerInformacionMiembro = e => {
        guardarMiembro({
            ...miembro,
            [e.target.name] : e.target.value
        })
    }

    return (
    	<div className="card-body">
			<form
				onSubmit={editarMiembro}
			>
				<div className="row">
					<div className="col">
						<div className="form-group">
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text"> <i className="fab fa-linkedin-in text-primary mr-2"></i> https://www.linkedin.com/in/</span>
								</div>
								<input 
									name="linkedin"
									type="text"
									onChange={leerInformacionMiembro}
									className="form-control" 
									defaultValue={miembros.linkedin}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<div className="form-group">
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text"> <i className="fab fa-twitter text-info mr-2"></i> https://twitter.com/</span>
								</div>
								<input 
									name="twitter"
									type="text"
									onChange={leerInformacionMiembro}
									className="form-control" 
									defaultValue={miembros.twitter}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<div className="form-group">
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text"> <i className="fab fa-facebook-f text-primary mr-2"></i> https://www.facebook.com/</span>
								</div>
								<input 
									name="facebook"
									type="text"
									onChange={leerInformacionMiembro}
									className="form-control" 
									defaultValue={miembros.facebook}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<div className="form-group">
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text"> <i className="fab fa-instagram text-danger mr-2"></i> https://www.instagram.com/</span>
								</div>
								<input 
									name="instagram"
									type="text"
									onChange={leerInformacionMiembro}
									className="form-control" 
									defaultValue={miembros.instagram}
								/>
							</div>
						</div>
					</div>
				</div>

				<input 
					className="btn btn-primary my-3" 
					value="Save changes" 
					type="submit"
				/>
			</form>
		</div>
    )

}

export default withRouter(EditarPerfil);