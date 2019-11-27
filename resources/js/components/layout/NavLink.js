import React from 'react';
import { Link } from "react-router-dom";

const NavLink = props => (
    <Link className={'MuiButtonBase-root MuiListItem-root MuiMenuItem-root ' +
    'Mui-selected MuiMenuItem-gutters MuiListItem-gutters ' +
    'MuiListItem-button Mui-selected'} to={props.settings.path}>
        { props.settings.name }
        <span className="MuiTouchRipple-root">&nbsp;</span>
    </Link>
);

export default NavLink;