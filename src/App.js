import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';

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
          <Route
            path="/shop/home"
            component={Home} />
          <Route
            path="/shop/products"
            component={FullWidthTabs} />
          <Route
            path="/shop/nosotros"
            component={Nosotros} />
          <Redirect to ="/shop/home" />
        </Switch>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
