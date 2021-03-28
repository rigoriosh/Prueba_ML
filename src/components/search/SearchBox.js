import React from 'react';
import PropTypes from 'prop-types';
import { Search } from './Search';
export const SearchBox = ({history}) => {
    return (
        <div>                  
            <Search history={history} />
            
            <h1 className="text-center mt-5">WELCOME TO MERCADO LIBRE</h1>                 
        </div>
    )
}

/* Tipado de las propiedades de entrada del componente */
SearchBox.prototype = {
    history: PropTypes.object.isRequired
}