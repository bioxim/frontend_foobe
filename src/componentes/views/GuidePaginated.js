import React from 'react';
import Parser from 'html-react-parser';

const GuidePaginated = ({docs}) => {
	return(
		<div className="row mb-3">
				
				{docs.map(doc => (

					<div className="col-12 col-lg-11 col-xl-10 mb-1 px-5">

			            <div className="card card-row shadow-light-lg">
			              <div className="row no-gutters">
			                <div className="col-12 col-md-6 bg-cover card-img-left">
			                	{ doc.imagen ? (
			                  		<img 
			                  			src={`${process.env.REACT_APP_BACKEND_URL}/${doc.imagen}`} 
			                  			alt={doc.titulo} 
			                  			className="img-fluid my-1"
			                  		/>
			                  		) : null
			                	}

			                  <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
			                    <svg viewBox="0 0 112 690" fill="none" xmlns="http://www.w3.org/2000/svg">
			                      <path d="M116 0H51V172C76 384 0 517 0 517V690H116V0Z" fill="currentColor"></path>
			                    </svg>
			                  </div>

			                </div>
			                <div className="col-12 col-md-6">
			                  <div className="card-body">

			                    <h4>
			                      {doc.titulo}
			                    </h4>

			                    <p className="text-muted">
			                      {Parser(doc.texto)}
			                    </p>

			                  </div>
			                </div>

			              </div>
			            </div>

			        </div>
		        
		        ))}

			</div>
	)
}
export default GuidePaginated;