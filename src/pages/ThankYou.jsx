import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';  // Create this file for styling

function ThankYou() {
  return (
    <div className="thank-you-page text-center">
      <h1>Thank You for Shopping with Us!</h1>
      <p>Your order has been successfully placed. We will contact you soon.</p>
      <Link to="/menu" className="btn btn-primary">Continue Shopping</Link>
    </div>
  );
}

export default ThankYou;
