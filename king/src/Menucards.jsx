import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Menucards.css'; 
import broast from './assets/broast.avif';
import pizza from './assets/pizza.jpg';
import fries from './assets/fries.jpg';
import burger from './assets/burger.jpg';
import cup from './assets/cup cakes.jpg';
import roll from './assets/chicken rolls.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menucards() {
  return (
    <div className="cards-container" style={{
      backgroundColor:'#1C1C1C'
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={fries} alt="fries" />
        <Card.Body>
          <center><Card.Title>French Fries</Card.Title></center>
          <Button className="custom-button menu-btn">150 RS</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={burger} alt="burger" />
        <Card.Body>
          <center><Card.Title>ZINGER BURGER</Card.Title></center>
          <Button className="custom-button menu-btn">370 RS</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={broast} alt="broast" />
        <Card.Body>
          <center><Card.Title>BROAST</Card.Title></center>
          <Button className="custom-button menu-btn">400 RS</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pizza} alt="pizza" />
        <Card.Body>
          <center><Card.Title>PIZZA</Card.Title></center>
          <Button className="custom-button menu-btn">700 RS</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cup} alt="cup" />
        <Card.Body>
          <center><Card.Title>CUP CAKES</Card.Title></center>
          <Button className="custom-button menu-btn">300 RS</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={roll} alt="roll" />
        <Card.Body>
          <center><Card.Title>CHICKEN ROLL</Card.Title></center>
          <Button className="custom-button menu-btn">140 RS</Button>
        </Card.Body>
      </Card>   
    </div>
  );
}

export default Menucards;
