import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';
import axios from 'axios'; // Import Axios
import { useCart } from '../pages/CardContext'; 
import TopdealsModal from '../Models/TopdealsModal';
import '../components/Topdeals.css'

function Topdeals() {
  const { addToCart } = useCart();  
  const [popup, setPopup] = useState({ isVisible: false, deal: null });
  const navigate = useNavigate(); 
  const [error, setError] = useState(null);
  const [topdealsproduct, setTopdealsProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopDeals = async () => {
      try {
        const response = await axios.get('https://topdealsapi-production-1456.up.railway.app/api/Topdeals');
        setTopdealsProduct(response.data); 
        console.log(response.config);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch top deals:', err);
        setError('Failed to fetch top deals');
        setLoading(false);
      }
    };

    fetchTopDeals();
  }, []);

  const showPopup = (item) => {
    setPopup({ isVisible: true, deal: item }); 
  };

  const hidePopup = () => {
    setPopup({ isVisible: false, deal: null });
  };

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);  
    hidePopup(); 
    navigate('/cart');  
  };

  if (loading) return <p>Loading top deals...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className='menu-title'>TOP DEALS</h1>
      <div className="everyday">
        {topdealsproduct.map((item) => (
          <Card style={{ width: '18rem', margin: '1rem' }} key={item._id}>
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
