import React from 'react';
import './Bestseller.css';

function Bestseller() {
  return (
    <>
      <div className="container">
        <h2 className="items-title">
          <span>BEST SELLERS</span>
        </h2>
        <div className="best-seller mt-4">
          
          <a href="https://www.kfcpakistan.com/krunch-burger" className="best-seller-img">
            <div className="saller-arrow">
              <i className="ri-arrow-right-line"></i>
            </div>
            <div className="kfc-box">
              <span></span><span></span><span></span>
            </div>
            <span className="wdp-ribbon wdp-ribbon-two">
              <span className="d-flex align-items-end">
                <h5 className="rs-title mb-0">Rs </h5>
                <h5 className="mb-0 pkr-title">290</h5>
              </span>
            </span>
            <h6>Krunch Burger</h6>
            <img
              className="bestseller-container"
              src="https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png"
              alt="Krunch Burger"
            />
          </a>

          <a href="https://www.kfcpakistan.com/krunch-combo" className="best-seller-img">
            <div className="saller-arrow">
              <i className="ri-arrow-right-line"></i>
            </div>
            <div className="kfc-box">
              <span></span><span></span><span></span>
            </div>
            <span className="wdp-ribbon wdp-ribbon-two">
              <span className="d-flex align-items-end">
                <h5 className="rs-title mb-0">Rs </h5>
                <h5 className="mb-0 pkr-title">570</h5>
              </span>
            </span>
            <h6>Krunch Combo</h6>
            <img
              className="bestseller-container"
              src="https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png"
              alt="Krunch Combo"
            />
          </a>

          <a href="https://www.kfcpakistan.com/hot-wings-bucket" className="best-seller-img">
            <div className="saller-arrow">
              <i className="ri-arrow-right-line"></i>
            </div>
            <div className="kfc-box">
              <span></span><span></span><span></span>
            </div>
            <span className="wdp-ribbon wdp-ribbon-two">
              <span className="d-flex align-items-end">
                <h5 className="rs-title mb-0">Rs </h5>
                <h5 className="mb-0 pkr-title">650</h5>
              </span>
            </span>
            <h6>Hot Wings Bucket</h6>
            <img
              className="bestseller-container"
              src="https://www.kfcpakistan.com/images/38718ee0-bc17-11ee-97ca-ad9c0958c4fc-Plain-wings-min_variant_0-2024-01-26065041.png"
              alt="Hot Wings: Dive into 10 pieces of our Signature Hot & Crispy Wings, packed with flavor and heat"
            />
          </a>

          <a href="https://www.kfcpakistan.com/mighty-zinger" className="best-seller-img">
            <div className="saller-arrow">
              <i className="ri-arrow-right-line"></i>
            </div>
            <div className="kfc-box">
              <span></span><span></span><span></span>
            </div>
            <span className="wdp-ribbon wdp-ribbon-two">
              <span className="d-flex align-items-end">
                <h5 className="rs-title mb-0">Rs </h5>
                <h5 className="mb-0 pkr-title">750</h5>
              </span>
            </span>
            <h6>Mighty Zinger</h6>
            <img
              className="bestseller-container"
              src="https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png"
              alt="Mighty Zinger: Our signature Zinger, but bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce, and cheese, all sandwiched between a sesame seed bun"
            />
          </a>
          
        </div>
      </div>
    </>
  );
}

export default Bestseller;
