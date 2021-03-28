import React from 'react';
import PropTypes from 'prop-types';
import { Search } from '../search/Search'
import { CardDetailProduct } from '../utils/CardDetailProduct';

/* Componente que renderiza la información del detalle de un producto previamente seleccionado por el cliente */
export const ItemDetail = ({history}) => {    
    return (
        <div>
            <Search history={history} /> {/* caja de busqueda */}
                
            <CardDetailProduct history={history}/> {/* componente para renderiza la información detalle producto */}
        </div>
    )
}

/* Tipado de las propiedades de entrada del componente */
ItemDetail.prototype = {
    history: PropTypes.object.isRequired
}