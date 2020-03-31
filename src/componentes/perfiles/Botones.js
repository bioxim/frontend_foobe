import React, { useState, useEffect, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

const Botones = ({_id, idLogueado, amigos}, props) => {

	const [miembro, guardarMiembro] = useState([]);
	
	const agregarContacto = _id => {			

		amigos.push(_id);

		guardarMiembro({
			...miembro
		})

		const resultado = clienteAxios.put(`/clientes/editar/${idLogueado}`, miembro);

	        // leer resultado
	    if(resultado.status === 200) {
	            // alerta de todo bien
	        Swal.fire({
	            type: 'success',
	            title: 'Success',
	            text: resultado.data.mensaje
	        })

	    } else {
	            // alerta de error
	        Swal.fire({
	            type: 'success',
	            title: 'Contact added',
	            text: 'Pls, go to you contact link'
	        })

	    }
	}

	const removerContacto = _id => {

		let pos_Id = amigos.indexOf(_id); // Case sensitive, muestra la posición de Metroid
		//console.log({pos_Id});

		amigos.splice(pos_Id, 1);

		guardarMiembro({
			...miembro
		})

		const res= clienteAxios.put(`/clientes/editar/${idLogueado}`, miembro);

	        // leer resultado
	        if(res.status === 200) {
	            // alerta de todo bien
	            Swal.fire({
	                type: 'success',
	                title: 'Remove',
	                text: res.data.mensaje
	            })

	        } else {
	            // alerta de error
	            Swal.fire({
	                type: 'success',
	                title: 'Contact removed',
	                text: 'Member remove from your contact list'
	            })
	        }

	}

	return (
		<Fragment>
			{
				(idLogueado !== _id)  ? 
					amigos !== undefined && amigos.includes(_id) ?
						<button
							className="btn btn-sm mt-2 btn-outline-danger"
							type="button"
							onClick={() => removerContacto(_id)}
						> 
							- contact 
						</button>
						:
						<button
							className="btn btn-sm mt-2 btn-outline-primary"
							type="button"
							onClick={() => agregarContacto(_id)}
						> 
							+ contact 
						</button>
				: null
			}
		</Fragment>
	)

}

export default Botones;