import React from 'react';
import moment from 'moment'; 

const LogsPaginated = ({logs}) => { 
	return(
		<div>
			{logs.map(log => (
				<p className="text-gray-700">
		            <span className="m-2 p-2 badge badge-pill badge-primary-soft">{moment(`${log.fecha}`).format('L')}</span>
		            { !localStorage.getItem('button', 'esp') ? <span>- {log.changelog}</span> : <span>- {log.changelogEsp}</span> }
		        </p>
	        ))}
        </div>
	)
}
export default LogsPaginated;