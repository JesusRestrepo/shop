import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';

import Home from './components/Home';
import Navbar from './components/navbar';
import Nosotros from './components/Nosotros';
import FullWidthTabs from './components/Products';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact
            path="/shop/"
            component={Home} />
          <Route exact
            path="/shop/products"
            component={FullWidthTabs} />
          <Route exact
            path="/shop/nosotros"
            component={Nosotros} />

          <Redirect to ="/shop" />
        </Switch>
      </HashRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
