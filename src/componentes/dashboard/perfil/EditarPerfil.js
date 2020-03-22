import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../../config/axios';

function EditarPerfil({miembros}, props) {

	const { _id } = miembros;

	const [miembro, guardarMiembro] = useState({
		nombre: '',
		tagline: ''
	});

	const [archivo, guardarArchivo] = useState('');

	const editarMiembro = async e => {
        e.preventDefault();

        // crear un formdata
        const formData = new FormData();
        formData.append('nombre', miembro.nombre);
        formData.append('tagline', miembro.tagline);
        formData.append('imagen', archivo);

        // almacenarlo en la BD
        try {
            const res = await clienteAxios.put(`/clientes/editar/${_id}`, formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            } );
            console.log(res);
            // Lanzar una alerta
            if(res.status === 200) {
                Swal.fire(
                    'Editado Correctamente',
                    res.data.mensaje,
                    'success'
                )
            }
            // redireccionar
            //props.history.push('/profile');

        } catch (error) {
            console.log(error);
            // lanzar alerta
            Swal.fire({
            	type:'error',
                title: 'Error',
                text: 'Please, try again'
            })
        }
    }

    // leer los datos del formulario
    const leerInformacionMiembro = e => {
        guardarMiembro({
            ...miembro,
            [e.target.name] : e.target.value
        })
    }

    // coloca la imagen en el state
    const leerArchivo = e => {
        guardarArchivo( e.target.files[0] );
    }

    return (
    	<div className="card-body">
			<form
				onSubmit={editarMiembro}
			>
				<div className="row">
					<div className="col-md-8">
						<div className="form-group">
							<label>Full Name</label>
							<input 
								name="nombre"
								type="text"
								onChange={leerInformacionMiembro}
								className="form-control" 
								defaultValue={miembros.nombre}
							/>
						</div>
						<div className="form-group">
							<label> Business Tagline</label>
							<input 
								name="tagline"
								type="text"
								onChange={leerInformacionMiembro} 
								className="form-control" 
								defaultValue={miembros.tagline}
							/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="text-center">
							{ miembros.imagen ? (
								<img src={`${process.env.REACT_APP_BACKEND_URL}/${miembros.imagen}`} alt="imagen" width="150" className="img-fluid rounded-circle" />
							) : null }
							<div className="mt-2">
								<input 
									type="file"  
									name="imagen"
									onChange={leerArchivo}
								/>
							</div>
							<small>
								For best results, use an square image .jpg or .png format
							</small>
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