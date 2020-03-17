import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './addons/noauth.css';
import MembershipFE from './MembershipFE';
import Newsletter from './Newsletter';

const Main = (props) => (
	<Fragment>
		<section className="pt-4 pt-md-11 pb-3">
		      <div className="container">
		        <div className="row align-items-center">
		          <div className="col-12 col-md-6 order-md-2">
		            <img src="img/illustration-main.png" alt="imagen ilustrativa foobe" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" />
		          </div>
		          <div className="col-12 col-md-6">
		            <h2 className="display-4 text-center text-md-left">
		              Welcome to <span className="text-primary font-weight-bold">Foobe</span>. <br/>
		          	</h2>
		            <h5 className="font-italic color-pink">for food Traders.</h5>
		            
		            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
		              Be a member of this community, built for traders and eveyone involved in food & beverages products.
		            </p>

		            <div className="text-center text-md-left">
		              <Link to={"/users-guide"} className="btn btn-primary">
		                Documentation <i class="fas fa-arrow-right"></i>
		              </Link>
		            </div>

		          </div>
		        </div>
		      </div> 
	    </section>

	    <section className="pt-9 pt-md-12 bg-gray-200">
	      <div className="container pb-3">
	        <div className="row justify-content-center">
	          <div className="col-12 col-md-10 col-lg-8 text-center">
	            
	            <h1 className="pt-3">
	              Be a Member for a lifetime.
	            </h1>

	            <p className="lead pb-3">
	              We offer many tools to connect our members in order to achieve successful businesses, in addition to the implementation of daily updates to expand the capacity of Foobe, only paying once.
	            </p>

	          </div>
	        </div>
	        <div className="row align-items-center no-gutters">
	          <div className="col-12 col-md-6">

	            <div className="card rounded-lg shadow-lg mb-6 mb-md-0">

	              <div className="card-body py-6 py-md-8">
	                <div className="row justify-content-center">
	                  <div className="col-12 col-xl-9">

	                    <div className="text-center mb-5">
	                      <span className="badge badge-pill badge-success-soft">
	                        <span className="h6 text-primary font-weight-bold text-uppercase">Membership</span>
	                      </span>
	                    </div>

	                    <div className="d-flex justify-content-center">
	                      <span className="h2 mb-0 mt-2">U$D</span>
	                      <span className="price display-2 mb-0">36</span>
	                      <span className="h2 align-self-end mb-1">/once</span>
	                    </div>

	                    <p className="text-center text-muted mb-6 mb-md-8">
	                      lifetime
	                    </p>

	                    <div className="d-flex">

	                      <MembershipFE />

	                    </div>

	                  </div>
	                </div> 
	              </div>

	              <Link to={"/buy-now"} className="card-btn btn btn-block btn-lg btn-primary">
	                Get it now
	              </Link>

	            </div>

	          </div>
	          <div className="col-12 col-md-6 ml-md-n3">

	            <div className="card rounded-lg shadow-lg">

	              <div className="card-body py-6 py-md-8">
	                <div className="row justify-content-center">
	                  <div className="col-12 col-xl-10">

	                    <p className="text-center mb-8 mb-md-11">
	                      <span className="badge badge-pill badge-success-soft">
	                        <span className="h6 text-primary font-weight-bold text-uppercase">Enterprise</span>
	                      </span>
	                    </p>

	                    <p className="lead text-center text-muted mb-0 mb-md-10">
	                      We offer variable pricing with discounts for larger organizations. Get in touch with us and we’ll figure out something that works for everyone.
	                    </p>

	                  </div>
	                </div> 
	              </div>

	              <Link to={"/contact-details"} className="card-btn btn btn-block btn-lg btn-light">
	                Contact us
	              </Link>

	            </div>

	          </div>
	        </div> 
	      </div> 
	    </section>

	    <section className="py-8 py-md-11 bg-dark">
		    <div className="container">
		        <div className="row justify-content-center">
		          	<div className="col-12 col-md-10 col-lg-8 text-center">

			            <span className="badge badge-pill badge-gray-700-soft mb-4">
			              <span className="h6 font-weight-bold text-uppercase">Get started Free</span>
			            </span>

			            <h1 className="display-4 text-white">
			              Join our DATABASE.
			            </h1>

			            <p className="font-size-lg texto-light mb-6 mb-md-8">
			             If you are a producer, manufacturer, trader or provide services of any kind, related to food and beverages, fill this form and be able to get to the members of the Foobe community.
			            </p>

			            <Link to={"/data"} className="btn btn-success lift">
			              DATABASE <i className="fas fa-arrow-right ml-2"></i>
			            </Link>

		          	</div>
		        </div>
		    </div>
	    </section>

	    <section className="pt-9 pt-md-12 bg-dark contenedor-vacio">
	    </section>  

        <Newsletter />

	</Fragment>    
)

export default Main;