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
                { !localStorage.getItem('button', 'esp') ? 'Community for food traders.' : 'Comunidad para traders de alimentos' }
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
                    { !localStorage.getItem('button', 'esp') ? 'Privacy Policy' : 'Política de Privacidad' }
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/terms-conditions"} className="text-reset">
                    { !localStorage.getItem('button', 'esp') ? 'Terms & Conditions' : 'Términos y Condiciones' }
                  </Link>
                </li>
              </ul>

            </div>
            <div className="col-12 col-sm-6 col-md-3 px-1 alinear">
          
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                { !localStorage.getItem('button', 'esp') ? 'Community' : 'Comunidad' }
              </h6>
              <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <Link to={"/users-guide"} className="text-reset">
                    { !localStorage.getItem('button', 'esp') ? 'Documentation' : 'Guia de Usuario' }
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/logs"} className="text-reset">
                    { !localStorage.getItem('button', 'esp') ? 'Changelog' : 'Actualizaciones' }
                  </Link>
                </li>
              </ul>

            </div>
            <div className="col-12 col-sm-6 col-md-3 px-1 alinear">
          
              <h6 className="font-weight-bold text-uppercase text-gray-700">
                { !localStorage.getItem('button', 'esp') ? 'Help (Faq)' : 'Ayuda(Faq)' }
              </h6>
              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <Link to={"/contact-details"} className="text-reset">
                    { !localStorage.getItem('button', 'esp') ? 'Contact us' : 'Contacto' }
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/payment-methods"} className="text-reset">
                    { !localStorage.getItem('button', 'esp') ? 'Payment methods' : 'Medios de Pago' }
                  </Link>
                 </li>
              </ul>

            </div>
          </div> 

          <p className="small text-muted text-center">© Foobe.  {(new Date().getFullYear())}. { !localStorage.getItem('button', 'esp') ? 'All rights reserved.' : 'Todos los derechos reservados' } </p>
        
        </div> 
    </footer>
  </Fragment>
)

export default Footer;