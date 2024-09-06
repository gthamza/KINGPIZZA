import React, { useState } from 'react';
import './ALA.css';
import { Card, Button } from 'react-bootstrap';
import MidnightModel from '../Models/MidnightModel';

function Midnight() {
  const [popup, setPopup] = useState({ isVisible: false, deal: null });

  const items = [
    {
      name: 'Midnight Deal 1',
      price: 'RS 490',
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-Midnight-Deal-1-2023-05-31115706.png',
      description: '1 Zinger burger + 1 regular drink',
    },
    {
      name: 'Midnight Deal 2',
      price: 'RS 590',
      image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-Mightnight-2-2023-05-31115706.png',
      description: '2 Krunch burgers + 2 regular drinks',
    },
    {
      name: 'Midnight Deal 3',
      price: 'RS 690',
      image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-midnight-deal-3-2023-05-31115706.png',
      description: 'Mighty Zinger + Regular drink',
    },
  ];

  const showPopup = (deal) => {
    setPopup({ isVisible: true, deal });
  };

  const hidePopup = () => {
    setPopup({ isVisible: false, deal: null });
  };

  return (
    <>
      <center><h1 className='menu-title'>Midnight</h1></center>
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
      {/* Render the modal and pass the necessary props */}
      {popup.isVisible && (
        <MidnightModel 
          isOpen={popup.isVisible} 
          onClose={hidePopup} 
          product={popup.deal} 
        />
      )}
    </>
  );
}

export default Midnight;
