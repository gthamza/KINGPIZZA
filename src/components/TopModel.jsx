import { useState } from "react";
import { CircleX } from "lucide-react";
import { useCart } from "../pages/CardContext";

const TopModal = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToBucket = () => {
    addToCart(product, quantity);
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          <CircleX size={32} color="white" />
        </button>
        <img className="modal-image" src={product.imgSrc} alt={product.title} />
        <p className="modal-description">{product.description}</p>
        <div className="modal-options">
          <div className="option">
            <label>Choose an option</label>
            <select>
              <option>
                {product.title} + {product.price}
              </option>
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
          <button className="add-to-bucket-btn" onClick={handleAddToBucket}>
            Add to Bucket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopModal;
