import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import clienteAxios from '../../config/axios';

import { Header, Navegacion } from '../layout/auth';

import Search from './Search';
import Pagination from '../Pagination';
import PaisLista from './PaisLista';

import { CRMContext } from '../../context/CRMContext';

import Loader from 'react-loader-spinner';
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Tipos = (props) => {

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
		const newItems = clientes.filter(items => items.empresa.toLowerCase().includes(value.toLowerCase()));
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
		<div className="wrapper  bg-light">
				<Header />
				<div className="main">
					
					<Navegacion />
					
					<div className="content">
						
						<div className="container-fluid">

							<div className="header">
								<h1 className="header-title">
									Members search by company
								</h1>
							</div>

							<Search
								onChangeSearch={onChangeSearch}
							/>
							
							{ items ?
								<PaisLista
									items={currentPosts}
								/> :
								<div className="row d-flex w-100 justify-content-center py-5">
									<Loader
										type="BallTriangle"
										color="#38cd"
										height={80}
										width={80}

									/>
								</div>
							}

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
	)
}
export default withRouter(Tipos);