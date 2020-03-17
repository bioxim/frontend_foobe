import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './addons/noauth.css';

const Footer = () => (
  <Fragment>
    <div className="bg-gray-200">
      <div className="position-relative mt-n15">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>  
    </div>
  	<footer className="py-3 bg-gray-200">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-3 px-1 alinear">
          
              <img src="img/foobe.png" className="img-fluid w-50" alt="Foobe logo protected by law" />

              <p className="text-gray-700 mb-2">
                Community for food traders.
              </p>

              <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                <li className="list-inline-item list-social-item mr-3">
                  <a href="https://www.linkedin.com/company/foobe" className="text-decoration-none" target="_blanck">
                  	<i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="https://twitter.com/foobeCommunity" className="text-decoration-none" target="_blanck">
                  	<i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="https://www.facebook.com/foobe.arg/" className="text-decoration-none" target="_blanck">
                  	<i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="https://www.instagram.com/foobe.arg/" className="text-decoration-none" target="_blanck">
                  	<i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-md-3 px-1 alinear">
          
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Legal
              </h6>
              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <Link to={"/privacy-policy"} className="text-reset">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/terms-conditions"} className="text-reset">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>

            </div>
            <div className="col-12 col-sm-6 col-md-3 px-1 alinear">
          
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Community
              </h6>
              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <Link to={"/users-guide"} className="text-reset">
                    Documentation
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/logs"} className="text-reset">
                    Changelog
                  </Link>
                </li>
              </ul>

            </div>
            <div className="col-12 col-sm-6 col-md-3 px-1 alinear">
          
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                Help (Faq)
              </h6>
              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <Link to={"/contact-details"} className="text-reset">
                    Contact us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/payment-methods"} className="text-reset">
                    Payment methods
                  </Link>
                 </li>
              </ul>

            </div>
          </div> 

          <p className="small text-muted text-center">© Foobe.  {(new Date().getFullYear())}. All rights reserved.</p>
        
        </div> 
    </footer>
  </Fragment>
)

export default Footer;