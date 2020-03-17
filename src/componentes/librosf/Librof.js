import React from 'react';
import moment from 'moment';

const Librof = ({ nombre, producto, pais, fecha, pdf, contactos }) => {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1">
			<div className="card">
						<div className="card-body bg-secondary">
							<div className="row">
								<div className="col mt-0 text-center">
									<a
										href={`${process.env.REACT_APP_BACKEND_URL}/${pdf}`}
										target="_blanck"
										className="btn btn-info btn-circle btn-xl"
									>
										<i class="fas fa-download"></i>
									</a>
									
								</div>
							</div>
							<div className="mb-0">
								<h5 className="card-title text-white text-center font-weight-bold text-uppercase py-2">{nombre}</h5>
								<h6>
									<small className="text-white">
										<span className="font-weight-bold">Updated:</span> {moment(`${fecha}`).format('MMMM Do YYYY')}
									</small>
								</h6>
								<h6>
									<small className="text-white">
										<span className="font-weight-bold">Product:</span> {producto} from {pais}
									</small>
								</h6>
								<h6>
									<small className="text-white">
										<span className="font-weight-bold">Contacts:</span> {contactos}
									</small>
								</h6>
							</div>
						</div>
			</div>
		</div>
	)
}

export default Librof;