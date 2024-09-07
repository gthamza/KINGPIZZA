import React, { useState } from 'react';
import { CircleX } from 'lucide-react';
import '../Models/Mdeverydayvalue.css'; 

const TopModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  // Decrease quantity, ensure it's not less than 1
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Increase quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // If modal is not open or product is null, don't render anything
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          <CircleX size={32} color="white" />
        </button>

        {/* Product Image */}
        <img className="modal-image" src={product.image} alt={product.title} />
        
        {/* Product Description */}
        <p className="modal-description">{product.text}</p>
        
        {/* Product Option */}
        <div className="modal-options">
          <div className="option">
            <label>Choose an option</label>
            <select>
              <option>{product.title} + {product.price}</option>
            </select>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>

        {/* Price and Add to Cart */}
        <div className="price-section">
          <span>{product.price}</span>
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
