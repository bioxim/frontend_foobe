import React, { useEffect, useState, useContext, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import Spinner from '../layout/Spinner';

import '../dashboard/Dashboard.css';
import '../layout/auth/Header.css';
import Header from '../layout/auth/Header';
import Navegacion from '../layout/auth/Navegacion';

import Search from './Search';
import LibrosfLista from './LibrosfLista';

import Pagination from '../Pagination';

// importar el Context
import { CRMContext } from '../../context/CRMContext';

const LibrosfPaises = (props) => {
	const [ libros, guardarTarjetas ] = useState([]);
	const [ items, setItems ] = useState(libros);

	const [loading, setLoading] = useState(false);
  	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(20);

	// utilizar valores del context
	const [auth, guardarAuth] = useContext(CRMContext);
	
	

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {

			setLoading(true);

			const tarjetasConsulta = await clienteAxios.get('/list');

			guardarTarjetas(tarjetasConsulta.data);

			setLoading(false);

		}
			
		consultarAPI();

	}, [libros, items, loading, guardarAuth]);

	const onChangeSearch = value => {
		const newItems = libros.filter(items => items.pais.toLowerCase().includes(value.toLowerCase()));
				    	setItems(newItems);
	}

	if(!auth.auth) {
		props.history.push('/login');
	}


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

	// spinner de carga
	if(!libros.length) return <Spinner />

	return (
		<Fragment>
			<div className="splash">
				<div className="splash-icon">
				</div>
			</div>

			<div className="wrapper">
				<Header />
				<div className="main">
					<Navegacion />
					<div className="content">
						<div className="container-fluid">
							
							<div className="header">
								<h1 className="header-title">
									Books by Country of origin Search
								</h1>
							</div>

							<Search
								onChangeSearch={onChangeSearch}
							/>
							
							<LibrosfLista
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
export default LibrosfPaises;
