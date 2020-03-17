import React, { useEffect, useState, Fragment } from 'react';
import clienteAxios from '../../config/axios';

import '../layout/notauth/addons/noauth.css';
import GuidePaginated from './GuidePaginated';
import Spinner from '../layout/Spinner';
import Pagination from '../Pagination';

const Guide = () => {

	const [ docs, guardarDocs ] = useState([]);

	const [loading, setLoading] = useState(false);
  	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(5);

	useEffect( () => {
		
		setLoading(true);

		const consultarAPI = async () => {
			//console.log('Consultando...');
			const docsConsulta = await clienteAxios.get('/doc');
			console.log(docsConsulta.data);

			// colocar el resultado en el state
			guardarDocs(docsConsulta.data);

			setLoading(false);
		}
		consultarAPI();
	}, [docs, loading]);

	// Get current 
	  const indexOfLastPost = currentPage * postsPerPage;
	  const indexOfFirstPost = indexOfLastPost - postsPerPage;
	  const currentPosts = docs.slice(indexOfFirstPost, indexOfLastPost);

	  // Change page
	  const paginate = pageNumber => setCurrentPage(pageNumber);

	// spinner de carga
	if(!docs.length) return <Spinner />

	return (
		<Fragment>
			<div className="col-12 col-md py-3 px-5">
	            <h3 className="mb-0">
	              Users's Guide
	            </h3>
	            <p className="mb-3 text-muted">
	              Foobe Functionalities and updates explained.
	            </p>
          	</div>

			<GuidePaginated
				docs={currentPosts}
			/>

			<div className="row px-5 mb-3">
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={docs.length}
					paginate={paginate}
				/>
			</div>

		</Fragment>
	)
}

export default Guide;