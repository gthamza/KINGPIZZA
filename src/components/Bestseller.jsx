import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bestseller.css';
import Modal from '../Models/Model';

function Bestseller() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://bestsellerapi-production.up.railway.app/api/products');
        console.log('API Response:', response.data);

        if (response.data && Array.isArray(response.data.bestsellerData)) {
          setProducts(response.data.bestsellerData); 
        } else {
          setError('Data format is incorrect. Expected an array inside the "bestsellerData" field.');
        }
        setLoading(false); 
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  const handleImageClick = (product) => {
    setModalData(product);
    setIsModalOpen(true);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <>
      <div className="container">
        <h2 className="items-title p-6">
          <span>BEST SELLERS</span>
        </h2>
        <div className="best-seller mt-4">
          {Array.isArray(products) && products.map((product, index) => (
            <div
              key={product._id}
              className="best-seller-img"
              onClick={() => handleImageClick(product)}
            >
              <div className="saller-arrow">
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="kfc-box">
                <span></span><span></span><span></span>
              </div>
              <span className="wdp-ribbon wdp-ribbon-two">
                <span className="d-flex align-items-end">
                  <h5 className="rs-title mb-0">Rs </h5>
                  <h5 className="mb-0 pkr-title">{product.price}</h5>
                </span>
              </span>
              <h6>{product.name}</h6>
              <img
                className="bestseller-container"
                src={product.image}
                alt={product.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={modalData}
        />
      )}
    </>
  );
}

export default Bestseller;
