import React, { Fragment, useContext } from 'react';

/* LAYOUT NO AUTH*/
import Header from './componentes/layout/notauth/Header';
import Main from './componentes/layout/notauth/Main';
import Footer from './componentes/layout/notauth/Footer';

/* VISTAS WEB */
import Contacto from './componentes/views/Contacto';
import Terminos from './componentes/views/Terminos';
import FormasPago from './componentes/views/FormasPago';
import Signup from './componentes/views/Signup';
import Logs from './componentes/views/Logs';
import Guide from './componentes/views/Guide';
import Productores from './componentes/productores/Productores';
import ProductoresSuccess from './componentes/productores/ProductoresSuccess';
import Calendario from './componentes/views/Calendario';

/* VISTAS PARA PLATAFORMA DE PAGOS */
import Success from './componentes/views/Success';
import Cancelation from './componentes/views/Cancelation';

/* PAGINA LOGIN */
import Login from './componentes/views/Login';

/* DASHBOARD */
import Dashboard from './componentes/dashboard/Dashboard';

/* TARJETAS */
import TarjetasFE from './componentes/tarjetas/TarjetasFE';
import TarjetasPaises from './componentes/tarjetas/TarjetasPaises';
import TarjetasEmails from './componentes/tarjetas/TarjetasEmails';

/* LIBROS */
import Libros from './componentes/libros/Libros';

/* LIBROS EN PDF DE PRODUCTORES Y TODOS */
import Librosf from './componentes/librosf/Librosf';
import LibrosfProducts from './componentes/librosf/LibrosfProducts';
import LibrosfPaises from './componentes/librosf/LibrosfPaises';

/* MANEJO DE PERFILES DE CLIENTES */
import Perfil from './componentes/dashboard/perfil/Perfil';
import Mensajeria from './componentes/dashboard/perfil/Mensajeria';
import Settings from './componentes/dashboard/perfil/Settings';
import Amigos from './componentes/dashboard/perfil/Amigos';

/* FILTROS DE FILTRAR PERFILES - BUSQUEDAS */
import Perfiles from './componentes/perfiles/Perfiles';
import Pais from './componentes/perfiles/Pais';
import Tipo from './componentes/perfiles/Tipo';

/* APIS DE QUANDL DE MERCADOS FINANCIEROS */
import Wiki from './componentes/quandl/Wiki';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// AUTH
import { CRMContext, CRMProvider } from './context/CRMContext';



function App() {

    // utilizar context en el componente
    const [ auth, guardarAuth ] = useContext(CRMContext);

  return (
    <Router>
    	<Fragment>
            <CRMProvider value={[ auth, guardarAuth ]}>
        		<Header />
        		<main>
        			<Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/contact-details" component={Contacto} />
                        <Route exact path="/terms-conditions" component={Terminos} />
                        <Route exact path="/privacy-policy" component={Terminos} />
                        <Route exact path="/payment-methods" component={FormasPago} />
                        <Route exact path="/buy-now" component={Signup} />
                        <Route exact path="/logs" component={Logs} />
                        <Route exact path="/users-guide" component={Guide} />
                        <Route exact path="/events" component={Calendario} />

                        <Route exact path="/congrats" component={Success} />
                        <Route exact path="/cancelation" component={Cancelation} />

                        <Route exact path="/data" component={Productores} />
                        <Route exact path="/data-success" component={ProductoresSuccess} />

                        <Route exact path="/login" component={Login} />

                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/profile" component={Perfil} />
                        <Route exact path="/contacts" component={Amigos} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/messages" component={Mensajeria} />

                        <Route exact path="/all-cards" component={TarjetasFE} />
                        <Route exact path="/all-cards-countries" component={TarjetasPaises} />
                        <Route exact path="/all-cards-emails" component={TarjetasEmails} />

                        <Route exact path="/books-cards" component={Libros} />

                        <Route exact path="/list" component={Librosf} />
                        <Route exact path="/list-products" component={LibrosfProducts} />
                        <Route exact path="/list-countries" component={LibrosfPaises} />

                        <Route exact path="/users-all" component={Perfiles} />
                        <Route exact path="/users-profile" component={Tipo} />
                        <Route exact path="/users-country" component={Pais} />

                        <Route exact path="/wiki/continuousfutures" component={Wiki} />
                        
        			</Switch>
        		</main>
        		<Footer />
            </CRMProvider>
    	</Fragment>
    </Router>
  )
}

export default App;
