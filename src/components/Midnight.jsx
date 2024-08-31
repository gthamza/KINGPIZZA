import React from 'react'
import './ALA.css';
import { Card, Button } from 'react-bootstrap';


function Midnight() {

    const items = [
        {
          name: 'Midnight Deal 1',
          price: '490',
          image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-Midnight-Deal-1-2023-05-31115706.png',
          description: '1 Zinger burger + 1 regular drink',
        },
        {
            name: 'Midnight Deal 2',
            price: '590',
            image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-Mightnight-2-2023-05-31115706.png',
            description: '2 Krunch burgers and + 2 regular drinks',
          },

          {
            name: 'Midnight Deal 3',
            price: '690',
            image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-midnight-deal-3-2023-05-31115706.png',
            description: 'Mighty Zinger + Regular drink',
          },
    ]

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
              <Button>Add to Bucket - {item.price}</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Midnight