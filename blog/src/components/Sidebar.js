import {React,memo} from 'react';
import {
    NavLink
} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { getName } from '../helpers/user';


const Sidebar = () => {

    return (<>

        <div className="sidebar bg-ligth">
            <ul>
                <li>
                    <span><AccountCircleIcon /><br />{getName()}</span>
                </li>
                <hr />
                <li>
                    <NavLink activeClassName="active" className=" text-dark rounded py-1 w-100 d-inline-block px-3" exact to="/articulo1"><HomeIcon />Inicio</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" className=" text-dark rounded py-1 w-100 d-inline-block px-3" exact to="/articulo2"><LocalGroceryStoreIcon />Articulos</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" className=" text-dark rounded py-1 w-100 d-inline-block px-3" exact to="/articulo3"><RecordVoiceOverIcon />Postear</NavLink>
                </li>
            </ul>
        </div></>
    );
}

export default memo(Sidebar);
