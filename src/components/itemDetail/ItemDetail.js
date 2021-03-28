import React from 'react'
import { Search } from '../search/Search'
import { CardDetailProduct } from '../utils/CardDetailProduct';

export const ItemDetail = ({history}) => {    
    return (
        <div>
            <Search history={history} />
                
            <CardDetailProduct history={history}/>
        </div>
    )
}
