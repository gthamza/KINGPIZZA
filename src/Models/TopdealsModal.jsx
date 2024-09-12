import React, { useState } from 'react';
import './Model.css';

function TopdealsModal({ isOpen, onClose, product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  // Function to decrease quantity
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Function to increase quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Function to add the product to the cart
  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product, quantity);  
    }
  };

  // Check if modal should be rendered
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          <span>X</span>
        </button>
        {product.imgSrc ? (
          <img className="modal-image" src={product.imgSrc} alt={product.title} />
        ) : (
          <p>Image not available</p>
        )}
        <p className="modal-description">{product.description}</p>
        <div className="quantity-selector">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="price-section">
          <span>{product.price}</span>
          <button className="add-to-bucket-btn" onClick={handleAddToCart}>
            Add to Bucket
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopdealsModal;
