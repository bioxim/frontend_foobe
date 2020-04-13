import React, { Fragment } from 'react';

const Directorio = (props) => {

	//Listado alfabetico
	const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

	return(
		<Fragment>
		{ alfabeto.map(letra => (
			<div className="tab-pane fade" id={`${letra}`} role="tabpanel">
															
				<div className="card">
					<div className="card-header d-flex justify-content-between">
						<h6 className="card-title mb-0">
							{letra} List
						</h6>
					</div>
					<div className="card-body">
						<div className="row w-100">
							<img 
								src="/img/illustration-1.png" 
								className="img-fluid"
								alt="we are working in this"
							/>
						</div>
					</div>
				</div>

			</div>
		))}
		</Fragment>
	)
}
export default Directorio;