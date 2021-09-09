import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/navbar';
import Nosotros from './components/Nosotros';
import FullWidthTabs from './components/Products';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Redirect
            from="/"
            to="/home" />
          <Route
            path="/shop/home"
            component={Home} />
          <Route
            path="/shop/products"
            component={FullWidthTabs} />
          <Route
            path="/shop/nosotros"
            component={Nosotros} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
