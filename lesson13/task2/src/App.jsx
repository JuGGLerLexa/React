import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Products from './Products';
import Home from './Home';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" component={Products} />
      </BrowserRouter>
    </div>
  );
};

export default App;
// 33.13
