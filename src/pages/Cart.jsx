import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useCart } from '../pages/CardContext';  
import CartItem from './CartItem'; // Import the CartItem component

function Cart() {
  const { cartItems } = useCart(); 
  const emptyBasket = cartItems.length === 0;

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + parseInt(item.product.price.replace('Rs', '')) * item.quantity, 0);

  return (
    <div className="container">
      {emptyBasket ? (
        <div className="text-center">
          <img className="sadimg" src="path/to/empty-cart-image.png" alt="Empty Cart" />
          <h2>Your cart is currently empty!</h2>
          <Link to="/menu" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="related-products-section">
            <h2>NEW IN STORE</h2>
            <div className="related-products-cart">
              {/* Add related products dynamically */}
              <div className="related-product">
                <img src="path/to/product-image.jpg" alt="Related Product" />
                <p>Product Name</p>
                <p>Rs. 999</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-8">
              <div className="cart-table mb-70">
                <table id="myTable">
                  <thead>
                    <tr>
                      <th scope="col">PRODUCT</th>
                      <th className="totalth" scope="col"></th>
                      <th className="totalth" scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <CartItem key={index} item={item} /> // Use CartItem component
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="total-amount">
                <h3>Total: Rs {totalAmount}</h3>
              </div>

              <div className="checkout-section">
                <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
