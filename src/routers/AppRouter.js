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
                    <Route exact path="/items" component={Items}/>
                    <Route exact path="/items/:id" component={ItemDetail}/>
                    <Route exact path="/" component={SearchBox}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
        </>
       
    )
}
