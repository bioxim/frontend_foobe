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
										Dalian Commodities Exchange
									</h5>
									<p className="text-muted px-2">
										The Dalian Commodities Exchange (DCE) data feed contains a total of 19 futures contracts that have been listed for trading on DCE, covering sectors of grain, oils and oil seeds, livestock, animal feed, forestry, chemical, energy, and metals.
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
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#corn" role="tab">
							                    <small>Corn</small>
							                </a>
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#cornstarch" role="tab">
							                    <small>Corn Starch</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#henegg" role="tab">
							                    <small>Hen Egg (fresh)</small>
							                </a>
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#palmolein" role="tab">
							                    <small>Palm Olein</small>
							                </a>
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#rice" role="tab">
							                    <small>Rice</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#soybean" role="tab">
							                    <small>Soybean</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#soybeanmeal" role="tab">
							                    <small>Soybean Meal</small>
							                </a>
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#soybeanoil" role="tab">
							                    <small>Soybean Oil</small>
							                </a>
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#livestock" role="tab">
							                    <small>Livestock</small>
							                </a>
										</div>
									</div>
								</div>
								<div className="col-md-8 col-xl-9">
									<div className="tab-content">
										<div className="tab-pane fade show" id="corn" role="tabpanel">
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
										<div className="tab-pane fade show" id="cornstarch" role="tabpanel">
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
										<div className="tab-pane fade show" id="henegg" role="tabpanel">
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
										<div className="tab-pane fade show" id="palmolein" role="tabpanel">
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
										<div className="tab-pane fade show" id="rice" role="tabpanel">
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
										<div className="tab-pane fade show" id="soybean" role="tabpanel">
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
										<div className="tab-pane fade show" id="soybeanmeal" role="tabpanel">
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
										<div className="tab-pane fade show" id="soybeanoil" role="tabpanel">
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