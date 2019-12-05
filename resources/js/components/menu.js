import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  menuList: {
    display: 'flex',
    outline: 'none',

    '& .MuiButtonBase-root': {
      margin: 'auto .2rem',
    },

    '& .Mui-selected, .MuiListItem-button:hover': {
      background: '#FFF',
      color: '#3f51b5',
    },
  },
}));

function Menu() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <MenuList className={classes.menuList}>
      <MenuItem
        selected={isSelected('/order-picker')}
        onClick={makeClickHandler('order-picker')}
      >
        Order Picker
      </MenuItem>

      <MenuItem
        selected={isSelected('/weighing-form')}
        onClick={makeClickHandler('weighing-form')}
      >
        Weighing Form
      </MenuItem>

      <MenuItem
        selected={isSelected('/price-availability')}
        onClick={makeClickHandler('price-availability')}
      >
        Price Availability
      </MenuItem>

      <MenuItem
        selected={isSelected('/cart')}
        onClick={makeClickHandler('cart')}
      >
        Cart
      </MenuItem>
    </MenuList>
  );

  function isSelected(path) {
    return location.pathname.includes(path);
  }

  function makeClickHandler(link) {
    return () => handleClick(link);
  }

  function handleClick(link) {
    history.push(link);
  }
}

export default Menu;
