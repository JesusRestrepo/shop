import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
            path="/home"
            component={Home} />
          <Route
            path="/products"
            component={FullWidthTabs} />
          <Route
            path="/nosotros"
            component={Nosotros} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
