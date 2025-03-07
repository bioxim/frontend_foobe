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
										Wiki Continuous Futures
									</h5>
									<p className="text-muted px-2">
										Continuous contracts for all 600 futures.  Build on top of raw data from CME, ICE, LIFFE, etc.
									</p>
									<small>
										Individual futures contracts trade for very short periods of time, and are hence unsuitable for long-horizon analysis. Continuous futures contracts solve this problem by chaining together a series of individual futures contracts, to provide a long-term price history that is suitable for trading, behavioral and strategy analysis.
									</small>
									<small>
										The advantage of continuous contract numbering (depth) is that it allows traders and analysts to construct very long historical time series of futures data for particular commodities. For example, C1 (Front Corn) data goes all the way back to 1970, even though no individual Corn contract is active for more than a year or two.  Of course, one must take care when analyzing and interpreting Continuous Contract data spanning decades, because the impact of multiple Rolls over such long time frames can be quite significant.
									</small>
								</div>
							</div>

							<div className="row mb-5">
								<div className="col-md-4 col-xl-3">
									<div className="card">
										<div className="card-header bg-light">
											<small className="card-title mb-0 text-dark text-uppercase">Select Commodity</small>
										</div>
										<div className="list-group list-group-flush" role="tablist">
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#barley" role="tab">
							                    <small>Barley</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#canola" role="tab">
							                    <small>Canola</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#cocoa" role="tab">
							                    <small>Cocoa</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#coffee" role="tab">
							                    <small>Coffee</small>
							                </a>
											<a className="list-group-item list-group-item-action" data-toggle="list" href="#corn" role="tab">
							                    <small>Corn</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#orangejuice" role="tab">
							                    <small>Orange Juice</small>
							                </a>
							                 <a className="list-group-item list-group-item-action" data-toggle="list" href="#sorghum" role="tab">
							                    <small>Sorghum</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#soybeans" role="tab">
							                    <small>Soybeans</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#sugar" role="tab">
							                    <small>Sugar</small>
							                </a>
							                <a className="list-group-item list-group-item-action" data-toggle="list" href="#wheat" role="tab">
							                    <small>Wheat</small>
							                </a>
										</div>
									</div>
								</div>
								<div className="col-md-8 col-xl-9">
									<div className="tab-content">
										<div className="tab-pane fade show" id="barley" role="tabpanel">
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
										<div className="tab-pane fade show" id="canola" role="tabpanel">
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
										<div className="tab-pane fade show" id="cocoa" role="tabpanel">
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
										<div className="tab-pane fade show" id="coffee" role="tabpanel">
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
										<div className="tab-pane fade show" id="orangejuice" role="tabpanel">
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
										<div className="tab-pane fade show" id="wheat" role="tabpanel">
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
										<div className="tab-pane fade show" id="sorghum" role="tabpanel">
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
										<div className="tab-pane fade show" id="sugar" role="tabpanel">
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
										<div className="tab-pane fade show" id="soybeans" role="tabpanel">
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