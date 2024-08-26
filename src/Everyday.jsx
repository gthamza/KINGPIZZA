import './Everyday.css';
import React, { useState } from "react";


const foodItems = [
    {
      id: 1,
      name: "Krunch Burger",
      description: "Krunch fillet, spicy mayo, lettuce, sandwiched between...",
      price: 290,
    },
    {
      id: 2,
      name: "Zingeratha",
      description: "Tender boneless strips, sliced onions, tangy imli chutney...",
      price: 390,
    },
    {
      id: 3,
      name: "Rice & Spice",
      description: "Spiced and buttery rice with 6 pcs of Hot Shots topped with...",
      price: 390,
    },
  ];
  
  const Card = ({ item, addToBucket }) => (
    <div className="card">
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className="price">Rs {item.price}</p>
      </div>
      <button onClick={() => addToBucket(item)}>+ Add to Bucket</button>
    </div>
  );
  
  const Bucket = ({ bucketItems }) => (
    <div className="bucket">
      <h2>Bucket</h2>
      {bucketItems.length === 0 ? (
        <p>No items added to the bucket yet.</p>
      ) : (
        <ul>
          {bucketItems.map((item, index) => (
            <li key={index}>
              {item.name} - Rs {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  const App = () => {
    const [bucket, setBucket] = useState([]);
  
    const addToBucket = (item) => {
      setBucket([...bucket, item]);
    };
  
    return (
      <div className="app">
        <div className="cards-container">
          {foodItems.map((item) => (
            <Card key={item.id} item={item} addToBucket={addToBucket} />
          ))}
        </div>
        <Bucket bucketItems={bucket} />
      </div>
    );
  };

  export default Everyday;