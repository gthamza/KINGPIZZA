import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ALA.css';
import TopModal from '../Models/StackModal';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../pages/CardContext';

function Snacks() {
  const { addToCart } = useCart();  // Add items to the cart
  const [popup, setPopup] = useState({ isVisible: false, deal: null });
  const navigate = useNavigate();  // Navigate after adding item to cart

  const items = [
    {
      name: 'Dinner Roll',
      price: '50',
      image: 'https://www.kfcpakistan.com/images/62153aa0-0513-11ee-8eee-c7aabf77bad4-Dinner-Roll-copy_variant_0-2023-06-07091210.png',
      description: 'Soft and fluffy, it complements any meal perfectly',
    },
    {
      name: 'Mayo Dip',
      price: '50',
      image: 'https://www.kfcpakistan.com/images/54939910-c4c3-11ee-9709-a3e2f7c40488-Dip-1_variant_0-2024-02-06074251.png',
      description: 'Creamy mayo for your dipping needs'
    },
    {
      name: 'Vietnamese Dip',
      price: '50',
      image: 'https://www.kfcpakistan.com/images/54c3a9c0-c4c3-11ee-9105-e90f4df78c69-Dip-2_variant_0-2024-02-06074251.png',
      description: 'Our spicy and sour signature sauce. Pair it with our fried chicken and fries for the win',
    },
    {
      name: 'Mineral Water 500ml',
      price: ' 90',
      image: 'https://www.kfcpakistan.com/images/61ea8120-0513-11ee-b037-a334837c64cb-Water_variant_0-2023-06-07091210.png',
      description: 'Mineral Water 500ml: Stay hydrated with our refreshing and pure mineral water in a convenient 500ml bottle',
    },
    {
      name: 'Coleslaw',
      price: ' 150',
      image: 'https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-Coleslaw_variant_0-2023-05-31115706.png',
      description: 'Sliced cabbage and carrots tossed in mayo',
    },

    {
        name: 'Pepsi Regular',
        price: ' 170',
        image: 'https://www.kfcpakistan.com/images/fea54530-3eed-11ef-b424-552aa36b144a-Pepsi-345ml_variant_0-2024-07-10185537.png',
        description: 'Pepsi Regular: Quench your thirst with the classic taste of Pepsi in a regular-sized bottle 345ml',
      },

      {
        name: '7UP Regular',
        price: '170',
        image: 'https://www.kfcpakistan.com/images/6249b820-0513-11ee-9e45-cb0ed000d4a6-7up_variant_0-2023-06-07091210.png',
        description: '7UP Regular: Experience the crisp and refreshing taste of 7UP in a regular-sized bottle 345ml',
      },  
      {
        name: 'Mirinda Regular',
        price: ' 170',
        image: 'https://www.kfcpakistan.com/images/05cd07f0-3f19-11ef-8da1-3b67e138baf3-Mirinda-345ml_variant_0-2024-07-11000337.png',
        description: 'Mirinda Regular: Satisfy your taste buds with the vibrant and fizzy flavor of Mirinda in a regular-sized bottle 345ml',
      },  
      {
        name: 'Mountain Dew Regular',
        price: '170',
        image: 'https://www.kfcpakistan.com/images/337af8e0-0461-11ee-a89a-612c84c58a93-Dew_variant_0-2023-06-06115641.png',
        description: 'Mountain Dew Regular: Energize yourself with the bold and exhilarating taste of Mountain Dew in a regular-sized bottle 345ml',
      },  
      {
        name: '1.5 Ltr Drink',
        price: ' 250',
        image: 'https://www.kfcpakistan.com/images/18d88330-f017-11ed-8a1e-df568680a232-1ltr1_variant_0-2023-05-11161551.png',
        description: 'Get a large serving of refreshment with our 1.5 Ltr Drink at KFC. Perfect for sharing, indulge in your favorite drink and enjoy the convenience of a larger size.',
      }, 

      {
        name: 'Corn On The Cob',
        price: '290',
        image: 'https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Corn_variant_0-2023-06-06115641.png',
        description: 'Boiled sweet corn brushed with butter',
      }, 

      {
        name: 'One Piece Chicken',
        price: '300',
        image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-1PcChicken_variant_0-2023-05-31115706.png',
        description: '1 piece of Hot & Crispy Fried Chicken',
      }, 

      {
        name: 'Snack Bucket',
        price: '630',
        image: 'https://www.kfcpakistan.com/images/1ea856a0-c523-11ee-a4e9-d3945f119baa-4e9ce970-05c0-11ee-b3d4-cde32594fefb-Snack-Bucket-2023-06-08055000_variant_0-2024-02-06190832.png',
        description: '4 Hot Wings + 4 Hot Shots + 2 Strips and 1 Dip. Satisfy your cravings with our snack bucket.',
      }, 

      {
        name: 'Hot Wings Bucket',
        price: ' 650',
        image: 'https://www.kfcpakistan.com/images/38718ee0-bc17-11ee-97ca-ad9c0958c4fc-Plain-wings-min_variant_0-2024-01-26065041.png',
        description: '10 Pcs of our Signature Hot & Crispy Wings',
      }, 

      {
        name: 'Spicy Nuggets',
        price: '550',
        image: 'https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-3_variant_0-2023-05-31115706.png',
        description: 'Spicy Nuggets: Savor the flavor with 6 pieces of mouthwatering chicken spicy nuggets',
      }, 

      {
        name: 'Masala Fries Bucket',
        price: '460',
        image: 'https://www.kfcpakistan.com/images/17d30790-c522-11ee-b29b-335f8668fef0-Bucket-Msala-fries-min_variant_0-2024-02-06190111.png',
        description: 'Masala Crispy and Golden Fries Bucket',
      }, 
  ];

  // Show the modal with the clicked item
  const showPopup = (item) => {
    console.log(item);  // Debugging: log the item to ensure it's being passed
    setPopup({ isVisible: true, deal: item });
  };

  // Hide the modal
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
      <center><h1 className='menu-title'>Snacks</h1></center>
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
        <TopModal 
          isOpen={popup.isVisible} 
          onClose={hidePopup} 
          product={popup.deal}  // Pass the selected product
          onAddToCart={handleAddToCart} 
        />
      )}
    </>
  );
}

export default Snacks;
