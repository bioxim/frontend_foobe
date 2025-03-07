import React, { useEffect, useState, useContext, Fragment } from 'react';
import clienteAxios from '../../config/axios';
import { Header, Navegacion } from '../layout/auth';
import Search from './Search';
import LibrosfLista from './LibrosfLista';

import Pagination from '../Pagination';

// importar el Context
import { CRMContext } from '../../context/CRMContext';

const LibrosfProducts = (props) => {
	const [ librosf, guardarTarjetas ] = useState([]);
	const [ items, setItems ] = useState(librosf);

	const [loading, setLoading] = useState(false);
  	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(20);

	// utilizar valores del context
	const [auth, guardarAuth] = useContext(CRMContext);
	
	

	useEffect( () => {
		
		const consultarAPI = async () => {

				setLoading(true);

				//console.log('Consultando...');
				const tarjetasConsulta = await clienteAxios.get('/list');

				// colocar el resultado en el state
				guardarTarjetas(tarjetasConsulta.data);

				setLoading(false);
		}
				
		consultarAPI();
	}, [librosf, items, loading, guardarAuth]);

	const onChangeSearch = value => {
		const newItems = librosf.filter(items => items.producto.toLowerCase().includes(value.toLowerCase()));
				    	setItems(newItems);
	}

	if(!auth.auth) {
		props.history.push('/login');
	}


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
			<div className="wrapper">
				<Header />
				<div className="main">
					<Navegacion />
					<div className="content">
						<div className="container-fluid">
							
							<div className="header">
								<h1 className="header-title">
									Books by Product Search
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
	)
}
export default LibrosfProducts;
