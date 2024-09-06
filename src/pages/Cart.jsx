import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useCart } from '../pages/CardContext';  
import CartItem from './CartItem';

function Cart() {
  const { cartItems } = useCart(); 
  const emptyBasket = cartItems.length === 0;
  
  // Flat shipping fee
  const shippingFee = 50;  

  // Calculate total amount (before shipping)
  const totalAmount = cartItems.reduce(
    (total, item) => 
      total + parseInt(item.product.price.replace(/[^0-9]/g, '')) * item.quantity, 
    0
  );

  // Calculate total with shipping fee
  const totalWithShipping = totalAmount + shippingFee;

  return (
    <div className="container cart-page">
      {emptyBasket ? (
        <div className="text-center">
          <img className="sadimg" src="path/to/empty-cart-image.png" alt="Empty Cart" />
          <h2>Your cart is currently empty!</h2>
          <Link to="/menu" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <h1 className="cart-title text-center mb-4">Your Cart</h1>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>

          <center> 
            <div className="cart-checkout card">
              <h3 className="cart-checkout-title text-white">Order Summary</h3>
              <table className="cart-checkout-table">
                <tbody>
                  <tr className="trr">
                    <td>Subtotal</td>
                    <td className="text-right">Rs {totalAmount}</td>
                  </tr>
                  <tr className="trr">
                    <td>Shipping</td>
                    <td className="text-right">Rs {shippingFee}</td>
                  </tr>
                  <tr className="trr">
                    <td>Total (incl. shipping)</td>
                    <td className="text-right"><strong>Rs {totalWithShipping}</strong></td>
                  </tr>
                </tbody>
              </table>
              <Link 
                to={{
                  pathname: "/Checkout",
                  state: { cartItems, totalWithShipping, shippingFee },  // Passing state
                }}
                className="checkout-button btn btn-success"
              >
                Proceed to Checkout
              </Link>
            </div>
          </center>
        </>
      )}
    </div>
  );
}

export default Cart;
