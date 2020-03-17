import React from 'react';
import Tarjeta from './Tarjeta';

const TarjetasLista = ({ items }) => {

    return (

        <div className="row mt-2">
    		{items.map((item, i) => (
    			<Tarjeta
    				key={item.nombre}
    				{...item}
    			/>				
			))}
    	</div>

    )
};

export default TarjetasLista;