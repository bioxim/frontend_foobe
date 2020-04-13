import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Header, Navegacion } from '../../layout/auth';
import clienteAxios from '../../../config/axios';
import Bienvenida from '../navbar/Bienvenida';
import moment from 'moment';
import Parser from 'html-react-parser';

function VerMensaje(props) {

	const id = props.match.params.id;
	const [ mensaje, guardarMensaje ] = useState([]);

	useEffect(() => {
    	
	        const consultarAPI = async () => {
	            const mensajeConsulta = await clienteAxios.get(`/msg/${id}`);
	            guardarMensaje(mensajeConsulta.data);
	        }

	        consultarAPI();
    }, [mensaje]);

	return (
		<div className="wrapper  bg-light">
			<Header />
			<div className="main">
				<Navegacion />
				<div className="content">
					<div className="container-fluid">
						<div className="header">
							<Bienvenida />
						</div>
						<div className="row mb-3">
							<div className="col">
								<div className="card">
									<div className="card-header d-flex justify-content-between border-bottom">
										<h5>{mensaje.titulo}</h5>
										<h5 className="text-muted my-1">
											<i className="far fa-clock mr-1"></i> 
											<small>{moment(`${mensaje.fecha}`).format('MMMM Do YYYY')}</small>
										</h5>
									</div>
									<div className="card-body p-5">
										
										{Parser(`${mensaje.mensaje}`)}
									    
									    <div className="row d-flex justify-content-center p-3">
									    	<Link
									    		to={"/messages"}
									    		className="btn btn-primary"
									    	>
									    	Back to Contacts
									    	</Link>
									    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default withRouter(VerMensaje);