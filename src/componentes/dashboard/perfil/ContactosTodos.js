import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../../config/axios';
import Loader from 'react-loader-spinner';
import '../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function ContactosTodos({id}) {

	const [ contacto, guardarContacto ] = useState([]);

	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const contactoConsulta = await clienteAxios.get(`/clientes/${id}`);
	            guardarContacto(contactoConsulta.data);
	        }

	        consultarAPI();
    }, [id, contacto]);

	return(
		<Fragment>
		{ contacto ?
			<tr>
				<td>
					{contacto.imagen ? 
						<img 
							src={`${process.env.REACT_APP_BACKEND_URL}/${contacto.imagen}`} 
							width="30" 
							height="30" 
							className="rounded-circle mt-2" 
							alt={contacto.nombre} 
						/> :
						<img 
							src="/img/avatar-static.jpg" 
							className="rounded-circle mt-2" 
							alt="member with no pic"
							width="30" 
							height="30" 
						/>
					}
				</td>
				<td>
					{contacto.nombre}
				</td>
				<td>
					<Link 
						to={`/messages/${contacto._id}`}
						className="btn"
						data-toggle="tooltip" 
						data-placement="top" 
						title={`Send private msg or email to: ${contacto.email}`}
					>
						<i className="fas fa-envelope text-success"></i>
					</Link>
				</td>
			</tr> :
			<Loader
				type="BallTriangle"
				color="#38cd"
				height={30}
				width={30}
			/>
		}
		</Fragment>
	)
}
export default ContactosTodos;