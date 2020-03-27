import React, { useEffect, useState, useContext, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import clienteAxios from '../../config/axios';

import '../dashboard/Dashboard.css';
import '../layout/auth/Header.css';
import Header from '../layout/auth/Header';
import Navegacion from '../layout/auth/Navegacion';

import Search from './Search';
import Pagination from '../Pagination';
import PaisLista from './PaisLista';

import { CRMContext } from '../../context/CRMContext';

const Pais = (props) => {

	const [ clientes, guardarClientes ] = useState([]);
	const [ items, setItems ] = useState(clientes);

	const [loading, setLoading] = useState(false);
  	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(50);

	const [auth, guardarAuth] = useContext(CRMContext);

	useEffect( () => {
		
		const consultarAPI = async () => {
				setLoading(true);

				//console.log('Consultando...');
				const clientesConsulta = await clienteAxios.get('/clientes');

				// colocar el resultado en el state
				guardarClientes(clientesConsulta.data);

				setLoading(false);
		}

		consultarAPI();
		
		}, [clientes, items, loading, guardarAuth]);

	const onChangeSearch = value => {
		const newItems = clientes.filter(items => items.pais.toLowerCase().includes(value.toLowerCase()));
				    	setItems(newItems);
	}

	const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

	if(!auth.auth) {
		props.history.push('/login');
	}

	return (
		<Fragment>

			<div className="splash">
				<div className="splash-icon">
				</div>
			</div>

			<div className="wrapper  bg-light">
				<Header />
				<div className="main">
					
					<Navegacion />
					
					<div className="content">
						
						<div className="container-fluid">

							<div className="header">
								<h1 className="header-title">
									Members search by country of origin
								</h1>
							</div>

							<Search
								onChangeSearch={onChangeSearch}
							/>

							<PaisLista
								items={currentPosts}
							/>

							<div className="row mb-3">
								<Pagination
									postsPerPage={postsPerPage}
									totalPosts={items.length}
									paginate={paginate}
								/>
							</div>	

						</div>

				    </div>
				
				</div>
			</div>

	    	<div className="redux-toastr" aria-live="assertive">
				<div>
					<div className="top-left">
					</div>
					<div className="top-right">
					</div>
					<div className="top-center">
					</div>
					<div className="bottom-left">
					</div>
					<div className="bottom-right">
					</div>
					<div className="bottom-center">
					</div>
				</div>
			</div>		

		</Fragment>
	)
}
export default withRouter(Pais);