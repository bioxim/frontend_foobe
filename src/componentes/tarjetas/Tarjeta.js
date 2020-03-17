import React from 'react';

const Tarjeta = ({ nombre, empresa, email, telefono, url, pais }) => {
    return (
    	<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1">
			<div className="card tarjeta">
				<div className="card-body bg-light">
					<div className="row">
						<div className="col mt-0">
							<h5 className="card-title">{nombre}</h5>
						</div>
					</div>
					<h6 className="display-5 mt-1 mb-3 font-weight-bold font-italic">
						{empresa} <span className="font-weight-normal">- {pais}</span>
					</h6>
					<div className="mb-0">
						<p> 
							<small>
								<i className="mr-2 text-primary fas fa-globe"></i> 
								<a href={`${url}`} target="_blanck">
									{url}
								</a>
							</small>
						</p>
						<p>
							<small>
								<i className="mr-2 text-primary fas fa-envelope"></i> 
								{email}
							</small>
						</p>
						<p>
							<small>
								<i className="mr-2 text-primary fas fa-phone-square-alt"></i> 
								{telefono}
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
    )
};

export default Tarjeta;