import React, { Fragment, useContext } from 'react';
import { CRMContext } from '../../context/CRMContext';
import Header from '../layout/auth/Header';
import Navegacion from '../layout/auth/Navegacion';
import Bienvenida from '../dashboard/navbar/Bienvenida';
import '../views/Styles.css';


const Wiki = (props) => {

	const [auth] = useContext(CRMContext);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
		<Fragment>
			<div className="splash">
				<div className="splash-icon">
				</div>
			</div>
			
			<div className="wrapper">
				<Header />
				<div className="main">
					<Navegacion />
					<div className="content">
						<div className="container-fluid">
							<div className="header">
								<Bienvenida />
							</div>
							<div className="row mb-3">
								<div className="card w-100">
									<h5 className="text-dark text-uppercase pt-2 px-2">
										Eurex Futures Data
									</h5>
									<p className="text-muted px-2">
										A list of all available futures, with code, traded months.
									</p>
								</div>
							</div>

							<div className="row mb-5">
								<div className="col-md-4 col-xl-3">
									<div className="card">
										<div className="card-header bg-light">
											<small className="card-title mb-0 text-dark text-uppercase">Select Product</small>
										</div>
										<div className="list-group list-group-flush" role="tablist">
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#agriculture" role="tab">
							                    <small>Agriculture</small>
							                </a>
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#grains" role="tab">
							                    <small>Grains</small>
							                </a>
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#livestock" role="tab">
							                    <small>Livestock</small>
							                </a>
										</div>
									</div>
								</div>
								<div className="col-md-8 col-xl-9">
									<div className="tab-content">
										<div className="tab-pane fade show" id="agriculture" role="tabpanel">
											<div className="card">
												
												<div className="col">
													<div className="alert alert-primary alert-dismissible" role="alert">
													<div className="alert-icon">
														<i className="far fa-fw fa-bell"></i>
													</div>
													<div className="alert-message">
														<strong>Hello there!</strong> Very soon!
													</div>

													<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									                	<span aria-hidden="true">×</span>
										            </button>
													</div>
												</div>

											</div>
										</div>
										<div className="tab-pane fade show" id="grains" role="tabpanel">
											<div className="card">
												
												<div className="col">
													<div className="alert alert-primary alert-dismissible" role="alert">
													<div className="alert-icon">
														<i className="far fa-fw fa-bell"></i>
													</div>
													<div className="alert-message">
														<strong>Hello there!</strong> Very soon!
													</div>

													<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									                	<span aria-hidden="true">×</span>
										            </button>
													</div>
												</div>

											</div>
										</div>
										<div className="tab-pane fade show" id="livestock" role="tabpanel">
											<div className="card">
												
												<div className="col">
													<div className="alert alert-primary alert-dismissible" role="alert">
													<div className="alert-icon">
														<i className="far fa-fw fa-bell"></i>
													</div>
													<div className="alert-message">
														<strong>Hello there!</strong> Very soon!
													</div>

													<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									                	<span aria-hidden="true">×</span>
										            </button>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="redux-toastr" aria-live="assertive">
				<div>
					<div className="top-left">
					</div>
					<div className="top-right">
					</div>
					<div className="top-center">
					</div>
					<div className="bottom-left">
					</div>
					<div className="bottom-right">
					</div>
					<div className="bottom-center">
					</div>
				</div>
			</div>
		</Fragment>
	)

}
export default Wiki;