import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography} from '@material-ui/core';
import  {ShoppingCart} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/ecommerce.png';
import useStyles from './styles.js';

const Navbar = ({ cartItems}) => {
    const classes = useStyles();
    const location= useLocation();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to ="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="E-Store" className={classes.image} height="25px"/>
                        E-Store
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={cartItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
