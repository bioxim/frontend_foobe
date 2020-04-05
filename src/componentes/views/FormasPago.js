import React, { Fragment } from 'react';

const FormasPago = () => (
	<Fragment>
		<section className="pt-8 pt-md-11 pb-8 pb-md-14">
			<div className="container">
				<div className="row align-items-center">
	          		<div className="col-12 col-md">
	          			<h1 className="display-4 mb-2">
			              Payment Methods
			            </h1>

			            <p classNameName="font-size-lg text-gray-700 mb-md-0">
			              Updated <i className="far fa-calendar-check"></i>  {(new Date().getDate())}-{(new Date().getMonth() + 1)}-{(new Date().getFullYear())}
			            </p>
	          		</div>
	          	</div>
	          	<div className="row">
		          <div className="col-12">
		            
		            <hr className="my-6 my-md-8" />

		          </div>
		        </div>
		        <div className="row">
		          <div className="col-12 col-md-8">

		            <p className="font-size-lg text-gray-800 mb-6 mb-md-8">
		              Below are our Payment Methods.  All payments are processed securely through PayPal or MercadoPago (only in Argentina available). Foobe does not directly process payments through the website.
		            </p>
		            
		            <h3 className="my-5">
		              Purchasing in Argentina
		            </h3>

		            <p className="text-gray-800">
		              Deposit or transfer in our bank account For the deposit or bank transfer to our account we will provide the number of the same or CBU respectively once the purchase is made.<br /> <br />
						Credit card Payments Security online are via Paypal for purchases with international cards and MercadoPago for purchases with local cards.
		            </p>
						
		            <div className="px-5">
		            	<img src="img/mercadopago.png" className="img-fluid" alt="formas de pago" />
		            </div>

		            <h3 className="my-5">
		              International Purchasing
		            </h3>

		            <p className="text-gray-800">
						Credit card Payments and others Security online are via Paypal for purchases with international cards.
		            </p>

					<div className="px-5">
		            	<img src="img/paypal.png" className="img-fluid" alt="formas de pago" />
		            </div>

		          </div>
		          <div className="col-12 col-md-4">
		            
		            <div className="card shadow-light-lg">
		              <div className="card-body">
		                
		                <h4 className="text-dark">
		                  Have a question?
		                </h4>

		                <p className="font-size-sm text-gray-800 mb-5">
		                  Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!
		                </p>

		                <h6 className="font-weight-bold text-uppercase text-dark mb-2">
		                  Call anytime
		                </h6>

		                <p className="font-size-sm mb-5">
		                  <p >+54 11 6117 5832</p>
		                </p>

		                <h6 className="font-weight-bold text-uppercase text-dark mb-2">
		                  Email us
		                </h6>

		                <p className="font-size-sm mb-0">
		                  <a href="mailto:contact@foobe.com.ar" className="text-reset">contact@foobe.com.ar</a>
		                </p>

		              </div>
		            </div>

		          </div>
		        </div> 
			</div>
		</section>
	</Fragment>
)

export default FormasPago;