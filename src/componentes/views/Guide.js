import React, { useEffect, useState, Fragment } from 'react';
import clienteAxios from '../../config/axios';

import GuidePaginated from './GuidePaginated';
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

	return (
		<Fragment>
			<div className="col-12 col-md py-3 px-5">
	            <h3 className="mb-0">
	              { !localStorage.getItem('button', 'esp') ? 'Users Guide' : 'Guía para el Usuario' }
	            </h3>
	            <p className="mb-3 text-muted">
	              { !localStorage.getItem('button', 'esp') ? 'Foobe Functionalities and updates explained.' : 'Las funcionalidades y actualizaciones de Foobe explicadas.' }
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