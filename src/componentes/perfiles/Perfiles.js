import React, {  useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../dashboard/Dashboard.css';
import '../layout/auth/Header.css';
import Header from '../layout/auth/Header';
import Navegacion from '../layout/auth/Navegacion';

import { CRMContext } from '../../context/CRMContext';

const Amigos = (props) => {

	const [auth] = useContext(CRMContext);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
			<div className="wrapper  bg-light">
				<Header />
				<div className="main">
					<Navegacion />
					<div className="content">
						<section className="section-border border-primary">
					      	<div className="container d-flex flex-column">
					        	<div className="row align-items-center justify-content-center no-gutters min-vh-100">
					          		<div className="col-8 col-md-6 col-lg-7 offset-md-1 order-md-2 mt-auto mt-md-0 pt-8 pb-4 py-md-11">

					            		<img src="img/illustration-1.png" alt="not yet" className="img-fluid" />

					          		</div>
					          		<div className="col-12 col-md-5 col-lg-4 order-md-1 mb-auto mb-md-0 pb-8 py-md-11">
					            
					            		<h1 className="display-3 font-weight-bold text-center">
					              			Uh Oh.
					            		</h1>

					            		<p className="mb-5 text-center text-muted">
					              			We ran into an issue, but don’t worry, we’ll take care of it for sure.
					            		</p>

					            		<div className="text-center">
					              			<Link to={"/dashboard"} className="btn btn-primary" >
					                			Back to dashboard
					              			</Link>
					            		</div>

					          		</div>
					        	</div>
					      	</div> 
				    	</section>
				    </div>
				</div>
			</div>
	)
}
export default withRouter(Amigos);