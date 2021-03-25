import React from 'react'
import { Grid } from '@material-ui/core';
import Product from './product/Product';

const products =[
    {
        id: 1,
        name: 'Shoes',
        description:'Running Shoes.',
        price:'$5',
        image:'https://images-na.ssl-images-amazon.com/images/I/711RJEthqtL._AC_UL1500_.jpg'
    },
    {
        id: 2,
        name: 'Macbook',
        description:'Apple Macbook.',
        price:'$10',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000'
    }
];

const Products = () => {
    return(
        <main>
        <Grid container justify="center" sapcing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products
