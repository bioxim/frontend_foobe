import React, { Fragment } from 'react';

const DirectorioMenu = (props) => {

	//Listado alfabetico
	const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

	return(
		<Fragment>
			<a className="list-group-item list-group-item-action py-0 text-center active" data-toggle="list" href="#all" role="tab">
				All
			</a>
			{ alfabeto.map(letra => (
				<a className="list-group-item list-group-item-action py-0 text-center" data-toggle="list" href={`#${letra}`} role="tab">
					{letra}
				</a>
			))}
		</Fragment>
	)
}
export default DirectorioMenu;