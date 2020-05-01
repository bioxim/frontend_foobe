import React, { Fragment } from 'react';

const FormasPago = () => (
	<Fragment>
		<section className="pt-8 pt-md-11 pb-8 pb-md-14">
			<div className="container">
				<div className="row align-items-center">
	          		<div className="col-12 col-md">
	          			<h1 className="display-4 mb-2">
			              { !localStorage.getItem('button', 'esp') ? 'Payment Methods' : 'Medios de Pago' }
			            </h1>

			            <p classNameName="font-size-lg text-gray-700 mb-md-0">
			              { !localStorage.getItem('button', 'esp') ? 'Updated' : 'Actualizado' } <i className="far fa-calendar-check"></i>  {(new Date().getDate())}-{(new Date().getMonth() + 1)}-{(new Date().getFullYear())}
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

		          	{ !localStorage.getItem('button', 'esp') ?
			            <p className="font-size-lg text-gray-800 mb-6 mb-md-8">
			              Below are our Payment Methods.  All payments are processed securely through PayPal or MercadoPago (only in Argentina available). Foobe does not directly process payments through the website.
			            </p> :
			            <p>
			            	A continuación se encuentran nuestros métodos de pago. Todos los pagos se procesan de forma segura a través de PayPal o MercadoPago (solo disponible en Argentina). Foobe no procesa directamente los pagos a través del sitio web.
			            </p>
			        }
		            
		            <h3 className="my-5">
		              Argentina
		            </h3>
					
					{ !localStorage.getItem('button', 'esp') ?
			            <p className="text-gray-800">
			              Deposit or transfer in our bank account For the deposit or bank transfer to our account we will provide the number of the same or CBU respectively once the purchase is made.<br /> <br />
							Credit card Payments Security online are via Paypal for purchases with international cards and MercadoPago for purchases with local cards.
			            </p> :
			            <p>
			            	Depósito o transferencia en nuestra cuenta bancaria Para el depósito o transferencia bancaria a nuestra cuenta, le proporcionaremos el número de la misma o CBU, respectivamente, una vez realizada la compra. <br /> <br />
							Los pagos con tarjeta de crédito de seguridad en línea son a través de Paypal para compras con tarjetas internacionales y MercadoPago para compras con tarjetas locales.
			            </p> }
						
		            <div className="px-5">
		            	<img src="img/mercadopago.png" className="img-fluid" alt="formas de pago" />
		            </div>

		            <h3 className="my-5">
		              { !localStorage.getItem('button', 'esp') ? 'International Purchasing' : 'Paypal Internacional' }
		            </h3>

		            { !localStorage.getItem('button', 'esp') ?
			            <p className="text-gray-800">
							Credit card Payments and others Security online are via Paypal for purchases with international cards.
			            </p> :
			            <p>
			            	Los pagos en línea con tarjeta de crédito y otros se realizan de forma totalmente segura a través de Paypal para compras con tarjetas internacionales.
			            </p> }

					<div className="px-5">
		            	<img src="img/paypal.png" className="img-fluid" alt="formas de pago" />
		            </div>

		          </div>
		          <div className="col-12 col-md-4">
		            
		            <div className="card shadow-light-lg">
		              <div className="card-body">
		                
		                <h4 className="text-dark">
		                  { !localStorage.getItem('button', 'esp') ? 'Have a question?' : 'Consultas?' }
		                </h4>

						{ !localStorage.getItem('button', 'esp') ?
			                <p className="font-size-sm text-gray-800 mb-5">
			                  Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!
			                </p> :
			                <p>
			                	¿No está seguro de lo que estamos buscando o solo queremos una aclaración? Estaremos encantados de chatear contigo y aclarar las cosas por ti. ¡En cualquier momento!
			                </p> }

		                <h6 className="font-weight-bold text-uppercase text-dark mb-2">
		                  { !localStorage.getItem('button', 'esp') ? 'Call anytime' : 'Llámenos' }
		                </h6>

		                <p className="font-size-sm mb-5">
		                  <p >+54 11 6117 5832</p>
		                </p>

		                <h6 className="font-weight-bold text-uppercase text-dark mb-2">
		                  Email
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