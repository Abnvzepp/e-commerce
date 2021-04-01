import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] =  useState({});

  const fetchProducts = async() => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve());
  }

  const addToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);

  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  console.log(cart);

  return (
    <Router>
      <div>
          <Navbar cartItems={cart.total_items}/>
          <Switch>
            <Route exact path="/">
                <Products products={products} addToCart={addToCart}/>
            </Route>
            <Route exact path="/cart">
                <Cart cart={cart} />
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>
          </Switch>
      </div>
    </Router>
    
  )
}

export default App

