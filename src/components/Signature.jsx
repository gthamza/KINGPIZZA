import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ALA.css';
import SignModel from '../Models/SignModel';
import {useCart} from '../pages/CardContext';
import {useNavigate} from 'react-router-dom';

function Signature() {
  const { addToCart } = useCart();  // Add items to the cart
  const [popup, setPopup] = useState({ isVisible: false, deal: null });
  const navigate = useNavigate();

  const showPopup = (item) => {
    setPopup({ isVisible: true, deal: item });  // Correctly pass item here
  };
  const hidePopup = () => {
    setPopup({ isVisible: false, deal: null });
  };

  const items = [
    {
      name: 'Crispy Box',
      price: 'RS 690',
      image: 'https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-CrispyBox-2023-05-31115706.png',
      description: 'In mood for something crispy? Get 2 pcs Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw',
    },
    {
      name: 'Boneless Box',
      price: 'RS 690',
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-BonelessBox-2023-05-31115706.png',
      description: 'Hassle-free boneless experience with 4 Chicken strips + 1 Coleslaw + 1 Regular fries + 1 Regular drink + 1 Dip + 1 Dinner roll',
    },
    {
      name: 'Wow Box',
      price: 'RS 1020',
      image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-WowBox-2023-05-31115706.png',
      description: 'Feel good with 1 Signature Zinger + 1 pc Hot & Crispy Chicken + 1 Regular fries + 1 Regular drink + 1 Coleslaw',
    },
    {
      name: 'Xtreme Duo Box',
      price: 'RS 1530',
      image: 'https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-XtremeDuoBox-2023-05-31115706.png',
      description: 'Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks',
    },
    {
      name: 'Crispy Duo Box',
      price: 'RS 1320',
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png',
      description: 'The irresistible combo of 2 Signature Zingers + 2 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks',
    },
  ];

 
   const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity); 
    hidePopup();  
    navigate('/cart'); 
  };
  return (
    <>
      <center><h1 className='menu-title'>SIGNATURE</h1></center>
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
          <SignModel 
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

export default Signature;
