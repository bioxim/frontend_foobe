import React from 'react';
import Perfil from './Perfil';

const PaisLista = ({ items }) => {

    return (

        <div className="row mt-2">
    		{items.map((item, i) => (
    			<Perfil
    				key={item.nombre}
    				{...item}
    			/>				
			))}
    	</div>

    )
};

export default PaisLista;