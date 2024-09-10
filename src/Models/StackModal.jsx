import React, { useState } from 'react';
import { CircleX } from 'lucide-react';
import '../Models/StackModal.css';

const TopModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          <CircleX size={32} color="white" />
        </button>

        {/* Ensure product image is displayed */}
        <img className="modal-image" src={product.image} alt={product.name} />
        
        {/* Ensure product name and description are displayed */}
        <h3>{product.name}</h3>
        <p className="modal-description">{product.description}</p>
        
        {/* Product price */}
        <div className="modal-options">
          <div className="option">
            <label>Price:</label>
            <span>{product.price}</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>

        {/* Add to bucket */}
        <div className="price-section">
          <button 
            className="add-to-bucket-btn" 
            onClick={() => onAddToCart(product, quantity)}
          >
            Add to Bucket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopModal;
