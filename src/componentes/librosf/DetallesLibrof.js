import React from 'react';
import { withRouter } from 'react-router-dom';

import '../layout/notauth/addons/noauth.css';

import moment from 'moment';

function DetallesLibrof({libros}, props) {

	return (
		<div className="row mt-2">
			{libros.map(libro => (
				<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1">
					<div className="card">
						<div className="card-body bg-white">
							<div className="row">
								<div className="col mt-0 text-center">
									<a
										href={`${process.env.REACT_APP_BACKEND_URL}/${libro.pdf}`}
										target="_blanck"
										className="btn btn-info btn-circle btn-xl"
									>
										<i class="fas fa-download"></i>
									</a>
									
								</div>
							</div>
							<div className="mb-0">
								<h5 className="card-title text-dark text-center font-weight-bold text-uppercase py-2">{libro.nombre}</h5>
								<h6>
									<small>
										<span className="font-weight-bold">Updated:</span> {moment(`${libro.fecha}`).format('MMMM Do YYYY')}
									</small>
								</h6>
								<h6>
									<small>
										<span className="font-weight-bold">Product:</span> {libro.producto} from {libro.pais}
									</small>
								</h6>
								<h6>
									<small>
										<span className="font-weight-bold">Contacts:</span> {libro.contactos}
									</small>
								</h6>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
export default withRouter(DetallesLibrof);