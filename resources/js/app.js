import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AppBar from './components/app-bar';
import OrderPicker from './pages/order-picker';
import WeighingForm from './pages/weighing-form';
import PriceAvailability from './pages/price-availability';
import Cart from './pages/cart';

function App() {
  return (
    <Router>
      <AppBar />

      <Switch>
        <Route path="/order-picker">
          <OrderPicker />
        </Route>
        <Route path="/weighing-form/:containerId">
          <WeighingForm />
        </Route>
        <Route path="/price-availability">
          <PriceAvailability />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>

        <Redirect from="/" to="/order-picker" />
      </Switch>
    </Router>
  );
}

export default hot(App);
