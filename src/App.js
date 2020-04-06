import React, { Fragment, useContext } from 'react';

/* RUTAS WEB */
import { Header, Main, Footer } from './componentes/layout/notauth';
import { Contacto, Terminos, FormasPago, Signup, Logs, Guide, Calendario, Success, Cancelation, Login, Productores, ProductoresSuccess } from './componentes/views';

/* DASHBOARD MAIN */
import { Dashboard, Perfil, Mensajeria, Setting, Amigos, AmigoDetalle } from './componentes/dashboard';

/* TARJETAS */
import { TarjetasFE, TarjetasPaises, TarjetasEmails } from './componentes/tarjetas';

/* LIBROS */
import Libros from './componentes/libros/Libros';

/* LIBROS EN PDF DE PRODUCTORES Y TODOS */
import { Librosf, LibrosfProducts, LibrosfPaises } from './componentes/librosf';

/* FILTROS DE FILTRAR PERFILES - BUSQUEDAS */
import { Perfiles, Pais, Tipo } from './componentes/perfiles';

/* APIS DE QUANDL DE MERCADOS FINANCIEROS */
import { Wiki, Eurex, Dalian } from './componentes/quandl';

/* CONVERSOR DE MONEDAS TOOL */
import Currencies from './componentes/converter/Currencies';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// AUTH
import { CRMContext, CRMProvider } from './context/CRMContext';

function App() {
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
                        <Route exact path="/contact-details/:id" component={AmigoDetalle} />
                        <Route exact path="/settings" component={Setting} />
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
                        <Route exact path="/eurex/futures" component={Eurex} />
                        <Route exact path="/dalian" component={Dalian} />

                        <Route exact path="/currencies" component={Currencies} />
                        
        			</Switch>
        		</main>
        		<Footer />
            </CRMProvider>
    	</Fragment>
    </Router>
  )
}

export default App;
