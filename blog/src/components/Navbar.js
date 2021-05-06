import {React,memo} from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
const Navbar = () => {
    const icon = () => {
        return <SettingsIcon />;
    }

    return (
        <div className="navbar">
            <div className="offset-11" >
                <DropdownButton id="dropdown-basic-button" size="sm" title={icon()}>
                    <Dropdown.Item href="/" onClick={() => { localStorage.removeItem('jwt') }} >Salir</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
}

export default memo(Navbar);
