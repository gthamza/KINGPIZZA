import React, { useState } from 'react';
import '../Models/StackModal.css';

function ALAModel({ isOpen, product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToBucket = () => {
    onAddToCart(product, quantity);  
  };

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          <span>X</span> 
        </button>
        <img className="modal-image" src={product.image} alt={product.name} />
        <p className="modal-description">{product.description}</p>
        <div className="modal-options">
          <div className="option">
            <label>Choose an option</label>
            <select>
              <option>{product.name} + {product.price}</option>
            </select>
          </div>
        </div>
        <div className="quantity-selector">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="price-section">
          <span>{product.price}</span>
          <button className="add-to-bucket-btn" onClick={handleAddToBucket}>Add to Bucket</button>
        </div>
      </div>
    </div>
  );
}

export default ALAModel;
