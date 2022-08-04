import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Contacts from './Contacts';
import Products from './Products';
import Home from './Home';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="contacts">
          <Contacts />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
