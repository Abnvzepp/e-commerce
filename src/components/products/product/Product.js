import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button, CardActionArea } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.media.source} 
          title={product.name} 
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
          {product.name}
          </Typography>
          <Typography gutterBottom  variant="h7" component="h3">
                {product.price.formatted_with_symbol}
            </Typography>
        <Typography dangerouslySetInnerHTML={{ __html:product.description}} variant="body2" color="textSecondary"/>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart />
            </IconButton>
     </CardActions>
    </Card>
        // <Card className={classes.root}>
        //     <CardActionArea>
        //     <CardMedia 
        //         className={classes.media} 
        //         image={product.media.source} 
        //         title={product.name} 
        //     />
        //     <CardContent>
        //         <div className={classes.cardContent}>
        //             <Typography variant="h6" gutterBottom>
        //                 {product.name}
        //             </Typography>
        //             <Typography variant="h6">
        //                 {product.price.formatted_with_symbol}
        //             </Typography>
        //         </div>
        //         {/* <Typography dangerouslySetInnerHTML={{ __html:product.description}} variant="body2" color="textSecondary"/> */}
        //     </CardContent>
        //     <CardActions disableSpacing className={classes.cardActions}>
        //         <IconButton aria-label="Add to Cart">
        //             <AddShoppingCart />
        //         </IconButton>
        //     </CardActions>
        //     </CardActionArea>
        // </Card>
    )
}

export default Product
