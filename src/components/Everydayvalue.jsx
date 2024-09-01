import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import zinger from '../assets/zingeratha.png'; 
import rice from '../assets/krunch_burger.png'; 
import TC from '../assets/TC.png';
import Twister from '../assets/Twister.png';
import KD from '../assets/Krunch_drink.png';
import chicken from '../assets/Krunch_combo.png';
import pcs from '../assets/3pcs.png';
import chickenchips from '../assets/chickenchips.png';
import Boneless from '../assets/Boneless.png';

import './Everydayvalue.css';

const items = [
  {
    title: "Zingeratha",
    text: "Tender boneless strips, sliced onions, tangy imli chutney, wrapped in a soft flatbread.",
    price: "Rs 390",
    image: zinger,
  },
  {
    title: "Krunch Burger",
    text: "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun.",
    price: "Rs 290",
    image: rice,
  },
  {
    title: "Rice & Spice",
    text: "Spiced and buttery rice with 6 pcs of Hot Shots topped with signature sauce.",
    price: "Rs 390",
    image: zinger,
  },
  {
    title: "Twister",
    text: "Tender chicken strips, wrapped in a tortilla with fresh veggies and mayo.",
    price: "Rs 370",
    image: Twister,
  },
  {
    title: "3 Pcs Chicken",
    text: "3 pieces of KFC's signature fried chicken with a crispy and juicy texture.",
    price: "Rs 480",
    image: pcs,
  },
  {
    title: "Krunch Combo",
    text: "Krunch Burger with fries and a drink. A perfect combo for a quick meal.",
    price: "Rs 470",
    image: chicken,
  },
  {
    title: "Chicken & Chips",
    text: "Crispy chicken fillet served with fries. A simple yet delicious combo.",
    price: "Rs 300",
    image: chickenchips,
  },
  {
    title: "Boneless Chicken",
    text: "Boneless chicken strips, crispy on the outside and tender on the inside.",
    price: "Rs 390",
    image: Boneless,
  },
  {
    title: "Krunch Drink",
    text: "Krunch Burger with a refreshing drink to complete your meal.",
    price: "Rs 350",
    image: KD,
  },

  {
    title: "Twister Combo",
    text: "Twister wrap with fries and a drink. A perfect meal on the go.",
    price: "Rs 500",
    image: TC,
  },
];

function Everydayvalue() {
  return (
    <>
     <center> <h1 className='menu-title'>EVERYDAY VALUE</h1></center>

      <div className="everyday">
        {items.map((item, index) => (
          <Card style={{ width: '18rem', margin: '1rem' }} key={index}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.text}
              </Card.Text>
              <Button>Add to Bucket - {item.price}</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Everydayvalue;
