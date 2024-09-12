import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';
import { useCart } from '../pages/CardContext'; 
import TopdealsModal from '../Models/TopdealsModal';
import '../components/Topdeals.css'


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

  const items = [
    {
      id: 1,
      title: 'Twister Combo',
      description: 'Twister + 1 Regular fries + 1 Regular drink',
      price: 'Rs 690',
      imgSrc: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png',
    },
    {
      id: 2,
      title: 'Zinger Stacker Combo',
      description: '1 Zinger Stacker + 1 Regular fries + 1 Regular drink',
      price: 'Rs 920',
      imgSrc: 'https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png',
    },
    {
      id: 3,
      title: 'Crispy Duo Box',
      description: 'Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks',
      price: 'Rs 1320',
      imgSrc: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png',
    },
    {
      id: 4,
      title: 'Family Festival 3',
      description: '4 Zinger burgers + 4 pcs Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink',
      price: 'Rs 2550',
      imgSrc: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png',
    },
  ];
    
  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);  
    hidePopup(); 
    navigate('/cart');  
  };

  return (
    <>
      <h1 className='menu-title'>TOP DEALS</h1>
      <div className="everyday">
        {items.map((item) => (
          <Card style={{ width: '18rem', margin: '1rem' }} key={item.id}>
            <Card.Img variant="top" src={item.imgSrc} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Title>{item.price}</Card.Title>
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
