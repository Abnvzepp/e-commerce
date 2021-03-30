import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography} from '@material-ui/core';
import  {ShoppingCart} from '@material-ui/icons';

import logo from '../../assets/ecommerce.png';
import useStyles from './styles.js';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="E-Store" className={classes.image} height="25px"/>
                        E-Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={2} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
