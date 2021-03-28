import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { ItemDetail } from '../components/itemDetail/ItemDetail';
import { Items } from '../components/items/Items';

import { SearchBox } from '../components/search/SearchBox';


export const AppRouter = () => {
    return (
       <>
        <Router>
            <div>                                
                <Switch>
                    <Route exact path="/items" component={Items}/> {/* Ruta por la cual se visualizará el listado de productos consultados segun una palabra */}
                    <Route exact path="/items/:id" component={ItemDetail}/> {/* Ruta para visualizar el detalle de un producto segun Id */}
                    <Route exact path="/" component={SearchBox}/> {/* Vista inicial en donde solo muestra la caja de busqueda */}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
        </>
       
    )
}
