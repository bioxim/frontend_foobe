import React from 'react';
import { Link } from 'react-router-dom';

import './Styles.css';

const Signup = () => (
	<section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
            
            <h1 className="mb-0 font-weight-bold">
              Be A Member
            </h1>

            <p className="mb-6 text-muted">
              Buy now for once in a lifetime membership and simplify your workflow for ever.
            </p>

            <form className="mb-6">

              <div className="form-group">
                <label className="mr-2">
                  Argentina Purchases
                </label>
                <a mp-mode="dftl" href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=457801573-6042f9ec-6723-4431-abe5-026e688f15f9" name="MP-payButton" class='blue-ar-l-rn-none' target="_blank">
                  Pagar
                </a>
              </div>

              <div class="form-group mb-5">
                <label className="mr-2">
                  International Purchases PayPal
                </label>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="8GV7XVR43VB4E" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                  <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1"/>
                </form>
              </div>
            </form>

            <p className="mb-0 font-size-sm text-muted">
              Already have an account? 
              <Link className="pl-2 font-weight-bold" to={"/login"}>
              Log in
              </Link>
            </p>
          </div>
          <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">

            <div className="h-100 w-cover bg-cover background-signup-image"></div>
  
            <div className="shape shape-left shape-fluid-y svg-shim text-white">
              <svg viewBox="0 0 100 1544" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H100V386L50 1158V1544H0V0Z" fill="currentColor"></path>
              </svg>
            </div>

          </div>
        </div> 
      </div> 
    </section>
)

export default Signup;