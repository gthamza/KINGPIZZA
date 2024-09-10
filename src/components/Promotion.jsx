import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ALA.css';
import PromotionModel from '../Models/PromotionModel';
import { useCart } from '../pages/CardContext';
import { useNavigate } from 'react-router-dom';  

function Promotion() {
  // using state for adding in cart
  const { addToCart } = useCart();  
  // use for making modal
  const [popup, setPopup] = useState({ isVisible: false, deal: null });
  // using to render cart.jsx
  const navigate = useNavigate(); 

  const showPopup = (item) => {
    console.log(item);  
    setPopup({ isVisible: true, deal: item }); 
  };

  const hidePopup = () => {
    setPopup({ isVisible: false, deal: null });
  };

  const items = [
    {
      name: '3 Pcs chicken with Drink',
      price: 'RS 550',
      image: 'https://www.kfcpakistan.com/images/9862ff50-3cfa-11ef-9ae9-79294a4a20c6-3pcschickenWebsitethumbnail-2024-07-08072046.png',
      description: '3 pieces of Hot and Crispy Fried Chicken with Drink',
    },
    {
      name: 'New Masala Strips & Fries',
      price: 'RS 590',
      image: 'https://www.kfcpakistan.com/images/47b930e0-10ec-11ef-9fc4-73831d15bb43-Thumbnail-min(2)_variant_0-2024-05-13054727.png',
      description: 'Enjoy 3 pieces of Masala Strips accompanied by fries served with honey mustard sauce',
    },
  ];

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);  
    hidePopup(); 
    navigate('/cart');  
  };

  return (
    <>
      <center><h1 className='menu-title'>PROMOTION</h1></center>
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
        {popup.isVisible && (
          <PromotionModel 
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

export default Promotion;
