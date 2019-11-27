import React, { Component } from 'react';

import NavLink from './NavLink';

const navLinks = [
    {
        name: 'Order Picker',
        path: '/order-picker'
    },
    {
        name: 'Weighing Form',
        path: '/'
    },
    {
        name: 'Price Availability',
        path: '/'
    },
    {
        name: 'Cart',
        path: '/'
    }
];

const Header = () => (
    <header
        className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary">
        <div className="MuiToolbar-root MuiToolbar-dense MuiToolbar-gutters">
            <ul className="MuiList-root jss43 MuiList-padding" role="menu" tabIndex="-1">
                {navLinks.map((navLink, index) => {
                    return (
                        <NavLink key={index} settings={navLink} />
                    );
                })}
            </ul>
        </div>
    </header>
);

export default Header;