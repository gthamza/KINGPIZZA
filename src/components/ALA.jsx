import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ALA.css';
import ALAModel from '../Models/ALAModel';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../pages/CardContext';  

function ALA() {
  const { addToCart } = useCart();  
  const [popup, setPopup] = useState({ isVisible: false, deal: null });
  const navigate = useNavigate();  

  const items = [
    {
      name: 'Zinger Burger',
      price: 'RS 590',
      image: 'https://www.kfcpakistan.com/images/6249b820-0513-11ee-9e45-cb0ed000d4a6-Zinger_variant_0-2023-06-07091210.png',
      description: 'Our hero- crispy Zinger fillet, signature mayo and lettuce- sandwiched between a sesame seed bun.'
    },
    {
      name: 'Zinger Combo',
      price: 'RS 880',
      image: 'https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Stacker_variant_0-2023-06-06115641.png',
      description: 'Zinger burger + 1 Regular fries + 1 Regular drink.'
    },
    {
        name: 'Zinger Stacker',
        price: 'RS 640',
        image: 'https://www.kfcpakistan.com/images/332ab600-0461-11ee-8f91-addd12cf7fa1-Kentucky_variant_0-2023-06-06115641.png',
        description: 'Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a corn meal bun'
    },
    {
        name: 'Mighty Burger',
        price: 'RS 750',
        image: 'https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png',
        description: 'Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun'
    },
    {
        name: 'Zinger Stacker Combo',
        price: 'RS 920',
        image: 'https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png',
        description: '1 Zinger Stacker + 1 Regular fries + 1 Regular drink'
    },
    {
        name: 'Kentucky Burger',
        price: 'RS 640',
        image: 'https://www.kfcpakistan.com/images/332ab600-0461-11ee-8f91-addd12cf7fa1-Kentucky_variant_0-2023-06-06115641.png',
        description: 'OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ sauce- sandwiched between an herb and black sesame bun'
    },
    {
        name: 'Kentucky Burger Combo',
        price: 'RS 920',
        image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-kenteky-combo-2023-05-31115706.png',
        description: 'Kentucky burger + 1 Regular fries+ 1 Regular drink'
    },
    {
        name: 'Mighty Zinger Combo',
        price: 'RS 1020',
        image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-mighty-Combo-2023-05-31115706.png',
        description: 'Mighty Zinger+ 1 Regular fries + 1 Regular drink'
    }
  ];

  const showPopup = (deal) => {
    setPopup({ isVisible: true, deal });
  };

  const hidePopup = () => {
    setPopup({ isVisible: false, deal: null });
  };

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);  // Add the selected item to the cart
    hidePopup();
    navigate('/cart');  // Redirect to cart page
  };

  return (
    <>
      <center><h1 className="menu-title">Ala-Carte-&-Combos</h1></center>
      <div className="everyday">
        {items.map((item, index) => (
          <Card style={{ width: '18rem', margin: '1rem' }} key={index}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Title>{item.price}</Card.Title>
              <Button onClick={() => showPopup(item)}>Add to Bucket</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {popup.isVisible && (
        <ALAModel 
          isOpen={popup.isVisible} 
          onClose={hidePopup} 
          product={popup.deal} 
          onAddToCart={handleAddToCart}  // Pass the addToCart handler
        />
      )}
    </>
  );
}

export default ALA;
