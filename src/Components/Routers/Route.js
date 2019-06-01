import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import ProductInventory from '../ProductInventory';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={ProductInventory}  />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;

