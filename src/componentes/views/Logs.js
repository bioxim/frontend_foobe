import React, { useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import Pagination from '../Pagination';
import LogsPaginated from './LogsPaginated';

const Logs = () => {

	const [ logs, guardarLogs ] = useState([]);

	const [loading, setLoading] = useState(false);
  	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(50);

	useEffect( () => {
		// Query a la API
		const consultarAPI = async () => {
		
			setLoading(true);

		const logsConsulta = await clienteAxios.get('/changelog');
			console.log(logsConsulta.data);

			// colocar el resultado en el state
			guardarLogs(logsConsulta.data);

			setLoading(false);
		}
		consultarAPI();
	}, [logs, loading]);

	// Get current 
	  const indexOfLastPost = currentPage * postsPerPage;
	  const indexOfFirstPost = indexOfLastPost - postsPerPage;
	  const currentPosts = logs.slice(indexOfFirstPost, indexOfLastPost);

	  // Change page
	  const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<div className="col pb-3">
			<h1 className="mt-3 ml-5">Changelog</h1>
			<h4 className="mb-5 mt-3 ml-5">Keep track of changes in Foobe Community.</h4>
			<LogsPaginated
				logs={currentPosts}
			/>
			<div className="row px-5">
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={logs.length}
					paginate={paginate}
				/>
			</div>
		</div>
	)
}
export default Logs;