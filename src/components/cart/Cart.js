import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import CardItem from './cartItem/CartItem';
import {Link} from 'react-router-dom';

import useStyles from './styles.js'


const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart =() => (
        <Typography variant="subtitle1">You have no items in your shopping cart.
            <Link to='/'className={classes.link}>Add Some Items</Link>
        </Typography>
    );

    const FilledCart =() => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CardItem item={item}/>
                        </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} variant="contained" size="large" type="button" color="secondary">Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} variant="contained" size="large" type="button" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    );
        
    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className ={classes.title} variant="h4" gutterBottom >Your Shopping Cart</Typography>
            {!cart.line_items.length? <EmptyCart/> : <FilledCart/> }
        </Container>
    )
}

export default Cart
