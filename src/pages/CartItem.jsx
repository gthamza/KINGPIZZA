import { useCart } from "../pages/CardContext";
import { Card, Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
  const { removeFromCart } = useCart();

  // Ensure price is always treated correctly
  const price =
    // eslint-disable-next-line react/prop-types
    typeof item.product.price === "string"
      ? // eslint-disable-next-line react/prop-types
        parseInt(item.product.price.replace(/[^0-9]/g, ""))
      : // eslint-disable-next-line react/prop-types
        item.product.price; // Use number directly if it's already numeric

  return (
    <Card
      className="cart-item-card mb-3 ml-80"
      style={{ width: "100%", maxWidth: "500px" }}
    >
      <Card.Body className="d-flex align-items-center">
        <div className="cart-product-img me-3">
          <img
            // eslint-disable-next-line react/prop-types
            src={item.product.image}
            alt={item.product.name}
            style={{ maxWidth: "100px" }}
          />
        </div>
        <div className="flex-grow-1">
          <h5 className="product-name">{item.product.name}</h5>
          <p className="d">{item.product.description}</p>
          <p className="product-price-total">{price}</p>
          <p className="product-quantity">Quantity: {item.quantity}</p>
        </div>
        <div>
          <Button
            variant="danger"
            className="remove-btn"
            // eslint-disable-next-line react/prop-types
            onClick={() => removeFromCart(item.product)}
          >
            Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
