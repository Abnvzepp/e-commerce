import React from 'react'
import {Card, Typography, CardContent, CardActions, CardMedia, Button} from '@material-ui/core'

import useStyles from './styles.js';

const CartItem = ({item, updateCartQty, removeCartQty }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography varaint="h4">{item.name}</Typography>
                <Typography varaint="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => updateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => updateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={()=> removeCartQty(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
