import React, { useState } from "react";
import "./Bestseller.css";
import Modal from "../Models/Model";

const bestsellerProducts = [
  {
    name: "KRUNCH BURGER",
    price: 290,
    image:
      "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png",
    description:
      "KRUNCH FILLET, SPICY MAYO, LETTUCE, SANDWICHED BETWEEN A SESAME SEED BUN.",
  },
  {
    name: "KRUNCH COMBO",
    price: 570,
    image:
      "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
    description: "KRUNCH BURGER, FRIES, AND A DRINK.",
  },
  {
    name: "HOT WINGS BUCKET",
    price: 650,
    image:
      "https://www.kfcpakistan.com/images/38718ee0-bc17-11ee-97ca-ad9c0958c4fc-Plain-wings-min_variant_0-2024-01-26065041.png",
    description:
      "10 PIECES OF HOT & CRISPY WINGS, PACKED WITH FLAVOR AND HEAT.",
  },
  {
    name: "MIGHTY ZINGER",
    price: 750,
    image:
      "https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png",
    description:
      "DOUBLE ZINGER FILLET WITH MAYO, LETTUCE, AND CHEESE, IN A SESAME SEED BUN.",
  },
];

function Bestseller() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleImageClick = (product) => {
    setModalData(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="container">
        <h2 className="items-title p-6">
          <span>BEST SELLERS</span>
        </h2>
        <div className="best-seller mt-4">
          {bestsellerProducts.map((product, index) => (
            <div
              key={index}
              className="best-seller-img"
              onClick={() => handleImageClick(product)}
            >
              <div className="saller-arrow">
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="kfc-box">
                <span></span>
                <span></span>
                <span></span>
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
