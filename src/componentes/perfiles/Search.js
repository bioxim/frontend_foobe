import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const Search = ({ onChangeSearch }) => {

    const [ search, setSearch ] = useState('');
    const thisinput = useRef(null);

    useLayoutEffect( () => {
        document.nombre = search ? search : `Buscando`;
    }, [search]);

    useEffect(() => {
        thisinput.current.focus();
    })

    return (
        <div className="row">
			<div className="col-12">
				<div className="card flex-fill">
					<form>
						<div className="form-row">
							<div className="form-group col mt-2 mx-2">
								<input 
									className="form-control" 
									type="text" 
									ref={thisinput}
					                value={search} 
					                placeholder="Search..."
					                onChange={e => { 
					                    const { value } = e.target;
					                    setSearch(value);
					                    onChangeSearch(value);
					                }}
								/>
							</div>
						</div>
					</form>										
				</div>
			</div>
		</div>
    )
}

export default Search;

