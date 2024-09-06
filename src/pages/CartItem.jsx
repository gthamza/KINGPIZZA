import React from 'react';

const CartItem = ({ item }) => {
  return (
    <tr>
      <td>
        <img src={item.product.imgSrc} alt={item.product.title} className="cart-product-image" />
        <span>{item.product.title}</span>
      </td>
      <td>{item.quantity}x</td>
      <td>Rs {parseInt(item.product.price.replace('Rs', '')) * item.quantity}</td>
    </tr>
  );
};

export default CartItem;
