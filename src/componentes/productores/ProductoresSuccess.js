import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../views/Styles.css';

const ProductoresSuccess = () => (
	<Fragment>
		<section className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover background-invitation-image">
		      <div className="container">
		        <div className="row justify-content-center">
		          <div className="col-12 col-md-10 col-lg-8 text-center">
		            
		            <h1 className="display-3 font-weight-bold text-white">
		              Thank you!
		            </h1>

		            <p className="lead text-white-75 mb-3">
		              Now you are in Foobe's database.  The next step is being part of this community. Many tools and connection ways in order to making business are waiting for you. You only pay once and forever.
		            </p>

		            <Link 
		            	to={"/buy-now"}
		            	className="btn btn-lg btn-outline-info mb-0 mt-5"
		            >
		            	BE A MEMBER NOW! <i className="fas fa-shopping-cart ml-2"></i>
		            </Link>

		          </div>
		        </div> 
		      </div> 
	    	</section>
	</Fragment>
)

export default ProductoresSuccess;