import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Articulo1 from '../menu/Articulo1';
import Articulo2 from '../menu/Articulo2';
import Articulo3 from '../menu/Articulo3';
import Login from '../login/Login';
import Dashboard  from '../components/Dashboard';


export function Children() {
    return Dashboard()
}

const Routes = () => {

    return (
        <Router>
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/inicio" exact={true} component={Children}></Route>
            <Route path="/articulo1" exact={true} component={Articulo1}></Route>
            <Route path="/articulo2" exact={true} component={Articulo2}></Route>
            <Route path="/articulo3" exact={true} component={Articulo3}></Route>
        </Router >
    );
}

export default Routes;
