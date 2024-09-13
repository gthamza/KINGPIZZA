import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TopModal from '../Models/Mdeverydayvalue';  // Ensure this is your modal component
import { useCart } from '../pages/CardContext';
import { useNavigate } from 'react-router-dom';  // Add this for navigation
import './ALA.css';

const items = [
  {
    title: "Zingeratha",
    text: "Tender boneless strips, sliced onions, tangy imli chutney, wrapped in a soft flatbread.",
    price: "Rs 390",
    image: 'https://www.kfcpakistan.com/images/19b05560-bc56-11ee-97d6-7187fd7553de-Zingeratha_variant_0-2024-01-26142047.png',
  },
  {
    title: "Krunch Burger",
    text: "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun.",
    price: "Rs 290",
    image: 'https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png',
  },
  {
    title: "Rice & Spice",
    text: "Spiced and buttery rice with 6 pcs of Hot Shots topped with signature sauce.",
    price: "Rs 390",
    image: 'https://www.kfcpakistan.com/images/b0c33f70-bc52-11ee-b144-5b816f8c83f0-Riceandspice_variant_0-2024-01-26135623.png',
  },
  {
    title: "Twister",
    text: "Tender chicken strips, wrapped in a tortilla with fresh veggies and mayo.",
    price: "Rs 370",
    image: 'https://www.kfcpakistan.com/images/337af8e0-0461-11ee-a89a-612c84c58a93-twister_variant_0-2023-06-06115641.png',
  },
  {
    title: "3 Pcs Chicken",
    text: "3 pieces of KFC's signature fried chicken with a crispy and juicy texture.",
    price: "Rs 480",
    image: 'https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-3pc-Chikcen_variant_0-2023-05-31115706.png',
  },
  {
    title: "Krunch Combo",
    text: "Krunch Burger with fries and a drink. A perfect combo for a quick meal.",
    price: "Rs 470",
    image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png',
  },
  {
    title: "Chicken & Chips",
    text: "Crispy chicken fillet served with fries. A simple yet delicious combo.",
    price: "Rs 300",
    image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-chicken-n-chips-2023-05-31115706.png',
  },
  {
    title: "Boneless Chicken",
    text: "Boneless chicken strips, crispy on the outside and tender on the inside.",
    price: "Rs 390",
    image: 'https://www.kfcpakistan.com/images/3fda5fc0-c1c8-11ee-88d6-317ad09e56fd-Chicken-Strips_variant_0-2024-02-02124030.png',
  },
  {
    title: "Krunch Drink",
    text: "Krunch Burger with a refreshing drink to complete your meal.",
    price: "Rs 350",
    image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png',
  },

  {
    title: "Twister Combo",
    text: "Twister wrap with fries and a drink. A perfect meal on the go.",
    price: "Rs 500",
    image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png',
  },
];

function Everydayvalue() {
  const [popup, setPopup] = useState({ isVisible: false, deal: null });
  const { addToCart } = useCart();  // Add items to the cart
  const navigate = useNavigate();  // Add this for navigation

  // Function to show the modal with the selected item
  const showPopup = (item) => {
    setPopup({ isVisible: true, deal: item });
  };

  // Function to hide the modal
  const hidePopup = () => {
    setPopup({ isVisible: false, deal: null });
  };

  // Handle adding an item to the cart
  const handleAddToCart = (item, quantity = 1) => {  
    addToCart(item, quantity);
    hidePopup();
    navigate('/cart');  
  };

  return (
    <>
      <center><h1 className="menu-title">EveryDay Value</h1></center>
      <div className="everyday">
        {items.map((item, index) => (
          <Card style={{ width: '18rem', margin: '1rem' }} key={index}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Card.Title>{item.price}</Card.Title>
              <Button onClick={() => showPopup(item)}>Add to Bucket</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Render the modal for adding to cart */}
      {popup.isVisible && (
        <TopModal 
          isOpen={popup.isVisible} 
          onClose={hidePopup} 
          product={popup.deal} 
          onAddToCart={handleAddToCart}  // Handle adding to cart through the modal
        />
      )}
    </>
  );
}

export default Everydayvalue;
