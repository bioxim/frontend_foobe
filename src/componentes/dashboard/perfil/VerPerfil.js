import React, { useState } from 'react';
import clienteAxios from '../../../config/axios';
import moment from 'moment';

function VerPerfil({miembros}, props) {

	const { nombre, nacimiento, imagen, actividad, empresa, direccion, pais, linkedin, facebook, twitter, instagram, website } = miembros;

	return(
		<div className="card-body">
			<div className="row p-3 bg bg-muted rounded">
				<div className="col col-md-6 text-center">
					{ imagen ? (
						<img src={`${process.env.REACT_APP_BACKEND_URL}/${imagen}`} alt="imagen" width="150" className="img-fluid rounded-circle" />
						) : null }
					<p className="text-uppercase text-dark pt-3 mb-0 font-weight-bold">{nombre}</p>
					<p className="text-uppercase text-dark mb-0 font-weight-bold"><small>b-day: {moment(`${nacimiento}`).format('MMMM Do')}</small></p>
				</div>
				<div className="col col-md-6">
					<div className="row">
						<label className="text-muted">{actividad ? (
							<span class="badge badge-secondary-soft badge-float badge-float-inside">
								<h5 className="m-0">{actividad}</h5>
							</span>
							) : 'Work Activity Here'}</label>
					</div>
					<div className="row px-3">
						<h6>
							{empresa ? (
								<span className="text-uppercase text-muted">
									<i className="far fa-building mr-2"></i> {empresa} - {pais}
								</span>
							) : 'Company - name'}
						</h6>
					</div>
					<div className="row">
						<small className="text-muted">
							<i class="fas fa-map-marker-alt mr-2"></i> Address
						</small>
					</div>
					<div className="row p-3">
						<small className="text-dark">
							{ direccion ? (
								direccion
							) : 'Company - address and country' }
						</small>
					</div>
					<div className="row">
						<small className="text-muted">
							<i class="fas fa-link"></i> Website
						</small>
					</div>
					<div className="row p-3">
						<small className="text-dark">
							{ website ? (
								website
							) : 'Company - website' }
						</small>
					</div>
					<div className="row">
						<small className="text-muted">
							<i class="fas fa-thumbtack mr-2"></i> Social Networks
						</small>
					</div>
					<div className="row p-3">
						{ linkedin ? ( 
							<a className="btn btn-sm btn-primary rounded-circle mx-1" href={`https://www.linkedin.com/in/${linkedin}`} target="_blanck"><i className="fab fa-linkedin-in"></i></a>
						) : null }
						{ twitter ? (
							<a className="btn btn-sm btn-info rounded-circle mx-1" href={`https://twitter.com/${twitter}`} target="_blanck"><i className="fab fa-twitter"></i></a>
						) : null }
						{ facebook ? (
							<a className="btn btn-sm btn-primary rounded-circle mx-1" href={`https://www.facebook.com/${facebook}`} target="_blanck"> <i className="fab fa-facebook-f"></i> </a>
						) : null }
						{ instagram ? (
							<a className="btn btn-sm btn-danger rounded-circle mx-1" href={`https://www.instagram.com/${instagram}`} target="_blanck"><i className="fab fa-instagram"></i></a>
						) : null }
					</div>
				</div>
			</div>
		</div>
	)
}
export default VerPerfil;