import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../../config/axios';

function EditarEmpleo({miembros}, props) {

	const { _id } = miembros;

	const [ paises, guardarPaises ] = useState([]);

	const [miembro, guardarMiembro] = useState({
		empresa: '',
		direccion: '',
		pais: ''
	});

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

			const paisesConsulta = await clienteAxios.get('https://restcountries.eu/rest/v2/all');
			guardarPaises(paisesConsulta.data);

		}
		consultarAPI();
	}, [paises]);

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
				<div className="row mb-3">
					<div className="col col-md-6">
						<div className="form-row">
							<label className="text-uppercase text-muted">
								Company name
							</label>
							<input 
								name="empresa" 
								placeholder="Company" 
								type="text" 
								className="form-control"
								onChange={leerInformacionMiembro}
								defaultValue={miembros.empresa}		
							/>
						</div>
					</div>
					<div className="col col-md-6">
						<div className="form-row">
							<label className="text-uppercase text-muted">
								Country
							</label>
							<select 
								name="pais" 
								className="custom-select"
								onChange={leerInformacionMiembro}
							>
								<option selected disabled>-- Choose Country --</option>
								{paises.map(pais =>(
									<option value={pais.name}>{pais.name}</option>
								))}
							</select>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col col-md-8">
						<div className="form-row">
							<label className="text-uppercase text-muted">
								Address
							</label>
							<input 
								name="direccion" 
								placeholder="Companys address" 
								type="text" 
								className="form-control"
								onChange={leerInformacionMiembro}
								defaultValue={miembros.direccion}		
							/>
						</div>
					</div>
					<div className="col col-md-4">
						<input 
							className="btn btn-primary mt-3" 
							value="Save changes" 
							type="submit"
						/>
					</div>
				</div>
			</form>
		</div>
    )

}

export default withRouter(EditarEmpleo);