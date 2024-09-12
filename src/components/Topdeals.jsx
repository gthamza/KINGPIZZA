import React, { useState } from 'react';
import '../components/Topdeals.css';
import TopdealsModal from '../Models/TopdealsModal';
import { useCart } from '../pages/CardContext';  
import { useNavigate } from 'react-router-dom';

function Topdeals() {
  const { addToCart } = useCart(); 
  const [popup, setPopup] = useState({ isVisible: false, deal: null });
  const navigate = useNavigate(); 

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

  // Function to show the modal popup
  const showPopup = (deal) => {
    setPopup({ isVisible: true, deal });
  };

  // Function to hide the modal popup
  const hidePopup = () => {
    setPopup({ isVisible: false, deal: null });
  };

  // Function to handle adding to cart and navigating to the cart page
  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);  // Add product to cart using context
    hidePopup();  // Close the popup
    navigate('/cart');  // Navigate to the cart page
  };

  return (
    <div className="top-container mb-5">
      <h2 className="items-title p-6"><span>TOP DEALS</span></h2>
      <div className="row borws-row">
        {items.map((item) => (  // Changed from deals.map() to items.map()
          <div className="col-lg-3 col-md-4 col-6" key={item.id}>
            <div className="card menu-card">
              <img className="card-img-top card-img" src={item.imgSrc} alt={item.description} />
              <div className="card-body p-0">
                <h5 className="card-title">{item.title}</h5>
                <h4 className="kfc-price">{item.price}</h4>
                <button className="ri-add-line rgeister-btn Add-web px-2" onClick={() => showPopup(item)}>
                  <span>Add to bucket</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding to cart */}
      <TopdealsModal
        isOpen={popup.isVisible}
        onClose={hidePopup}
        product={popup.deal}
        onAddToCart={handleAddToCart}  
      />
    </div>
  );
}

export default Topdeals;
