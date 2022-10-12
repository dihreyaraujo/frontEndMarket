import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Product from './Product';
import Checkout from './Checkout';

class Roteador extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route path="/product/:id" component={ Product } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Roteador;
