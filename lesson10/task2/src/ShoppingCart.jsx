import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: '10',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '20',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '30',
        name: 'iPhone 5s',
        price: 100,
      },
      {
        id: '60',
        name: 'MacOS',
        price: 899,
      },
    ],
  };
  render() {
    const count = this.state.cartItems.length;

    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}
export default ShoppingCart;
