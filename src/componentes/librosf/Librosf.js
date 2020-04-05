import React, { useEffect, useState, useContext } from 'react';
import clienteAxios from '../../config/axios';

import { Header, Navegacion } from '../layout/auth';

import DetallesLibrof from './DetallesLibrof';

import Pagination from '../Pagination';

import { CRMContext } from '../../context/CRMContext';

function Librosf(props) {

	const [libros, guardarLibros] = useState([]);

	const [loading, setLoading] = useState(false);
  	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(20);

	// utilizar valores del context
	const [auth, guardarAuth] = useContext(CRMContext);



    useEffect(() => {

        	const consultarAPI = async () => {

		            setLoading(true);

		            const resultado = await clienteAxios.get('/list');
		            guardarLibros(resultado.data);

		            setLoading(false);
			}

        	consultarAPI();
	}, [libros, loading, guardarAuth]);
	// Get current 
	  const indexOfLastPost = currentPage * postsPerPage;
	  const indexOfFirstPost = indexOfLastPost - postsPerPage;
	  const currentPosts = libros.slice(indexOfFirstPost, indexOfLastPost);

	  // Change page
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
									All Books
								</h1>
							</div>
							
				            <DetallesLibrof
				                libros={currentPosts} 
				            />

							<div className="row mt-1 mb-3">
								<Pagination
									postsPerPage={postsPerPage}
									totalPosts={libros.length}
									paginate={paginate}
								/>
							</div>

						</div>
					</div>
				</div>
			</div>
	)
}
export default Librosf;

