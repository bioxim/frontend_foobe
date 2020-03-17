import React from 'react';
import Librof from './Librof';

const LibrosfLista = ({ items }) => {

    return (

        <div className="row mt-2">
    		{items.map((item, i) => (
    			<Librof
    				key={item.nombre}
    				{...item}
    			/>				
			))}
    	</div>

    )
};

export default LibrosfLista;