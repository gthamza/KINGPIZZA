import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../pages/CardContext";
import TopdealsModal from "../Models/TopdealsModal";
import "../components/Topdeals.css";

const topDealsData = [
  {
    name: "Twister Combo",
    price: 690,
    image:
      "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
    description: "Twister + 1 Regular fries + 1 Regular drink",
  },
  {
    name: "Zinger Stacker Combo",
    price: 920,
    image:
      "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png",
    description: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
  },
  {
    name: "Crispy Duo Box",
    price: 1320,
    image:
      "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png",
    description:
      "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
  },
  {
    name: "Family Festival 3",
    price: 2550,
    image:
      "https://www.kfcpakistan.com/images/634e6df0-9627-11ef-b12f-312c6a2b6968-family-Festivle-3-2024-10-29185538.png",
    description:
      "4 Zinger burgers + 4 pcs Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
  },
];

function Topdeals() {
  const { addToCart } = useCart();
  const [popup, setPopup] = useState({ isVisible: false, deal: null });
  const navigate = useNavigate();

  const showPopup = (item) => {
    setPopup({ isVisible: true, deal: item });
  };

  const hidePopup = () => {
    setPopup({ isVisible: false, deal: null });
  };

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
    hidePopup();
    navigate("/cart");
  };

  return (
    <>
      <h1 className="menu-title">TOP DEALS</h1>
      <div className="everyday">
        {topDealsData.map((item, index) => (
          <Card className="topdeal-card" key={index}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Title>Rs {item.price}</Card.Title>
              <Button onClick={() => showPopup(item)}>Add to Bucket</Button>
            </Card.Body>
          </Card>
        ))}
        {popup.isVisible && (
          <TopdealsModal
            isOpen={popup.isVisible}
            onClose={hidePopup}
            product={popup.deal}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>
    </>
  );
}

export default Topdeals;
