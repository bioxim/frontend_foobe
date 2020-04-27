import React, { Fragment } from 'react';

import './Styles.css';

const Terminos = () => (
	<Fragment>
		<section className="pt-8 pt-md-11 pb-8 pb-md-14">
	      <div className="container">
	        <div className="row align-items-center">
	          <div className="col-12 col-md">

	            <h1 className="display-4 mb-2">
	              { !localStorage.getItem('button', 'esp') ? 'Terms of Service' : 'Términos del Servicio' }
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
	              		Below are our Terms of Service, which outline a lot of legal goodies, but the bottom line is it’s our aim to always take care of both you, as a customer, or as a seller on our platform. 
	            	</p> : 
	            	<p>
	            		A continuación se encuentran nuestros Términos de servicio, que describen una gran cantidad de artículos legales, pero la conclusión es que nuestro objetivo es cuidar siempre de usted, como cliente o como vendedor en nuestra plataforma.
	            	</p> }
	            
	            <h3 className="my-5">
	              { !localStorage.getItem('button', 'esp') ? 'Licensing Terms' : 'Términos de la licencia' }
	            </h3>

	            { !localStorage.getItem('button', 'esp') ? 
		            <p className="text-gray-800">
		              By visiting and/or taking any action on Foobe, you confirm that you are in agreement with and bound by the terms outlined below. These terms apply to the website, emails, or any other communication.
		            </p> :
		            <p>
		            	Al visitar y / o realizar cualquier acción en Foobe, confirma que está de acuerdo y sujeto a los términos descritos a continuación. Estos términos se aplican al sitio web, correos electrónicos o cualquier otra comunicación.
		            </p> }

	            <p>
	              { !localStorage.getItem('button', 'esp') ? 'Here are terms of our License:' : 'Aquí los términos de nuestra Licencia de uso:' }
	            </p>

	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
	              	<p className="text-gray-800">
		                FOOBE is a company whose purpose is the provision of information services and tools for the activity of international commercial food and beverages. The data it disseminates is merely informative. FOOBE does not make value judgments about the information, nor does it provide recommendation or advice of any kind or nature to perform acts or operations of any kind. The sources of the information obtained in the FOOBE bases are indicated in each case, all of which are authorized by Law 25.326 on the Protection of Personal Data. The information contained in the bases of this site is confidential and can only be used under that condition.  The Exchange of information and/or some other type of material, or, also, the result of the interaction among registered users, is under the strict individual responsibility among the parties involved, leaving FOOBE out of reach.
		              </p> :
		              <p>
		              	FOOBE es una empresa cuyo propósito es la provisión de servicios de información y herramientas para la actividad de alimentos y bebidas comerciales internacionales. Los datos que difunde son meramente informativos. FOOBE no realiza juicios de valor sobre la información, ni proporciona recomendaciones o consejos de ningún tipo o naturaleza para realizar actos u operaciones de ningún tipo. Las fuentes de la información obtenida en las bases FOOBE se indican en cada caso, todas las cuales están autorizadas por la Ley 25.326 de Protección de Datos Personales. La información contenida en las bases de este sitio es confidencial y solo puede usarse bajo esa condición. El intercambio de información y / o algún otro tipo de material, o, también, el resultado de la interacción entre usuarios registrados, está bajo la estricta responsabilidad individual entre las partes involucradas, dejando a FOOBE fuera del alcance.
		              </p> }

	            </div>
	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800">
		                The information provided to users is for direct and exclusive use. Customers may not sell, sub-license, publish and / or distribute in any way the information obtained from the FOOBE databases through the website, without the prior consent of FOOBE.  The information may only be published or distributed without the consent of FOOBE when an administrative order of a competent or judicial authority so requires.
		              </p> :
		              <p>
		              	La información proporcionada a los usuarios es para uso directo y exclusivo. Los clientes no pueden vender, sublicenciar, publicar y / o distribuir de ninguna manera la información obtenida de las bases de datos FOOBE a través del sitio web, sin el consentimiento previo de FOOBE. La información solo puede publicarse o distribuirse sin el consentimiento de FOOBE cuando así lo requiera una orden administrativa de una autoridad competente o judicial.
		              </p> }

	            </div>
	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800">
		                Users may not use the information provided by FOOBE through the web for any other purpose that is different or incompatible with the one that originated the query.
		              </p> :
		              <p>
		              	Los usuarios no pueden usar la información proporcionada por FOOBE a través de la web para ningún otro propósito que sea diferente o incompatible con el que originó la consulta.
		              </p> }

	            </div>
	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800">
		                This license can be terminated if you breach it and you lose the account and you are going to be remove as a member user of Foobe.
		              </p> :
		              <p>
		              	Esta licencia puede cancelarse si la infringe y pierde la cuenta y será eliminado como usuario miembro de Foobe.
		              </p> }

	            </div>
	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ?  
		              <p className="text-gray-800">
		                In accordance with article 26 of Law 25,326, FOOBE limits itself to reproducing data provided by sources accessible to the public, from information provided by the interested party or with his consent; Either provided by the creditor or by anyone acting on their own or interest.
		              </p> :
		              <p>
		              	De conformidad con el artículo 26 de la Ley 25.326, FOOBE se limita a reproducir datos proporcionados por fuentes accesibles al público, a partir de información proporcionada por la parte interesada o con su consentimiento; Ya sea proporcionado por el acreedor o por cualquier persona que actúe por su cuenta o interés.
		              </p> }

	            </div>

	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800">
		                All information and its presentation design constitute intellectual property of FOOBE protected by Law 11.723.
		              </p> :
		              <p>
		              	Toda la información y su diseño de presentación constituyen propiedad intelectual de FOOBE protegida por la Ley 11.723.
		              </p> }

	            </div>

	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ?  
		              <p className="text-gray-800">
		                Foobe does not consider food or beverages any substance and / or material from animals in danger of extinction, nor live animals in danger of extinction.  Any indication of this content is totally prohibited and the member can be expelled from the community.
		              </p> :
		              <p>
		              	Foobe no considera alimentos o bebidas ninguna sustancia y / o material de animales en peligro de extinción, ni animales vivos en peligro de extinción. Cualquier indicación de este contenido está totalmente prohibida y el miembro puede ser expulsado de la comunidad.
		              </p> }

	            </div>

	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800">
		                It is prohibited to offend, insult or use any type of discriminatory language or insult among other members.
		              </p> :
		              <p>
		              	Está prohibido ofender, insultar o usar cualquier tipo de lenguaje discriminatorio o insulto entre otros miembros.
		              </p> }

	            </div>

	            <p>
	              { !localStorage.getItem('button', 'esp') ? 'If you opt for an Enterprise License:' : 'Si usted elige una Licencia para Empresas:' }
	            </p>
	            
	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800 mb-6 mb-md-8">
		                You are licensed to special promotional offers of multiple users.
		              </p> :
		              <p>
		              	Tiene licencia para ofertas promocionales especiales de múltiples usuarios.
		              </p> }

	            </div>

	            <h3 className="mb-5">
	              { !localStorage.getItem('button', 'esp') ? 'Additional Terms' : 'Términos adicionales' }
	            </h3>
	  
	            { !localStorage.getItem('button', 'esp') ?
		            <p className="text-gray-800">
		              By visiting and/or taking any action on Foobe, you confirm that you are in agreement with and bound by the terms outlined below. These terms apply to the website, emails, or any other communication.
		            </p> :
		            <p>
		            	Al visitar y / o realizar cualquier acción en Foobe, confirma que está de acuerdo y sujeto a los términos descritos a continuación. Estos términos se aplican al sitio web, correos electrónicos o cualquier otra comunicación.
		            </p> }

	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800">
		                All payments are processed securely through PayPal or MercadoPago (only in Argentina available). Foobe does not directly process payments through the website.
		              </p> :
		              <p>
		              	Todos los pagos se procesan de forma segura a través de PayPal o MercadoPago (solo disponible en Argentina). Foobe no procesa directamente los pagos a través del sitio web.
		              </p> }

	            </div>
	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800">
						Being a platform in constant growth and updates, and in addition to this, it is paid only once, Foobe will not make refunds under any circumstances.
		              </p> :
		              <p>
		              	Al ser una plataforma en constante crecimiento y actualizaciones, y además de esto, se paga solo una vez, Foobe no realizará reembolsos bajo ninguna circunstancia.
		              </p> }

	            </div>

	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ? 
		              <p className="text-gray-800">
		                Membership is a benefit for those who follow our terms and policies. We may at any time suspend or terminate your account.
		              </p> :
		              <p>
		              	La membresía es un beneficio para aquellos que siguen nuestros términos y políticas. En cualquier momento podemos suspender o cancelar su cuenta.
		              </p> }

	            </div>

	            <div className="d-flex">
	                
	              <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
	                <i className="fas fa-check"></i>
	              </span>

	              { !localStorage.getItem('button', 'esp') ?
		              <p className="text-gray-800 mb-6 mb-md-0">
		                Foobe may suspend its activities without responsibilities of any kind with its users and undertakes to give notice of at least 30 days in order to download or copy its permitted content.
		              </p> :
		              <p>
		              	Foobe puede suspender sus actividades sin responsabilidad de ningún tipo con sus usuarios y se compromete a notificar al menos 30 días para descargar o copiar su contenido permitido.
		              </p> }

	            </div>

	          </div>
	          <div className="col-12 col-md-4">
	            
	            <div className="card shadow-light-lg">
	              <div className="card-body">
	                
	                <h4 className="text-dark">
	                  { !localStorage.getItem('button', 'esp') ? 'Have a question?' : '¿Alguna Consulta?' }
	                </h4>

	                { !localStorage.getItem('button', 'esp') ?
		                <p className="font-size-sm text-gray-800 mb-5">
		                  Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!
		                </p> :
		                <p>
		                	¿No está seguro exactamente de lo que estamos buscando o solo queremos una aclaración? Estaremos encantados de chatear contigo y aclarar las cosas por ti. ¡En cualquier momento!
		                </p> }

	                <h6 className="font-weight-bold text-uppercase text-dark mb-2">
	                  { !localStorage.getItem('button', 'esp') ? 'Call anytime' : 'Llámenos' }
	                </h6>

	                <p className="font-size-sm mb-5">
	                  <p >+54 11 6117 5832</p>
	                </p>

	                <h6 className="font-weight-bold text-uppercase text-dark mb-2">
	                  { !localStorage.getItem('button', 'esp') ? 'Email us' : 'Email' }
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

export default Terminos;