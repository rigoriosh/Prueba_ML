import React from 'react'
import { Search } from './Search'
export const SearchBox = ({history}) => {
    return (
        <div>                  
            <Search history={history} />
            
            <h1 className="text-center mt-5">WELCOME TO MERCADO LIBRE</h1>                 
        </div>
    )
}
