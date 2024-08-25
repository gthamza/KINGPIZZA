import React from 'react';
import './Topdeals.css';
import deal from './assets/deal1.png';
import deal2 from './assets/deal2.png';
import deal3 from './assets/deal3.png';
import deal4 from './assets/deal4.png';

function Topdeals() {
  return (
    <div className="top-container mb-5">
      <h2 className="items-title"><span>TOP DEALS</span></h2>
      <div className="row borws-row">
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card menu-card">
            <div className="kfc-box"><span></span><span></span><span></span></div>
            <div className="manu-img-item">
              <img 
                className="card-img-top card-img" 
                src={deal}
                alt="Twister Combo: A delicious combo featuring the Twister wrap, crispy fries, and a refreshing drink" 
              />
            </div>
            <div className="card-body p-0 " id='deal2'>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">Twister Combo</h5>
                <span>
                  <button className="btn-item">
                    <i className="ri-heart-line"></i>
                  </button>
                </span>
              </div>
              <p className="card-text">Twister + 1 Regular fries + 1 Regular drink</p>
              <h4 className="kfc-price">Rs 690</h4>
              <div className="price-label">
                <button className="ri-add-line rgeister-btn Add-web px-2"><span>Add to bucket</span></button>
                <button className="ri-add-line rgeister-btn Add-mobil px-2"><span>Add to bucket</span></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card menu-card">
            <div className="kfc-box"><span></span><span></span><span></span></div>
            <div className="manu-img-item">
              <img 
                className="card-img-top card-img" 
                src={deal2} 
                alt="Zinger Stacker Combo: An irresistible combo featuring the Zinger Stacker burger, crispy fries, and a refreshing drink" 
              />
            </div>
            <div className="card-body p-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">Zinger Stacker Combo</h5>
                <span>
                  <button className="btn-item">
                    <i className="ri-heart-line"></i>
                  </button>
                </span>
              </div>
              <p className="card-text">1 Zinger Stacker + 1 Regular fries + 1 Regular drink</p>
              <h4 className="kfc-price">Rs 920</h4>
              <div className="price-label">
                <button className="ri-add-line rgeister-btn Add-web px-2"><span>Add to bucket</span></button>
                <button className="ri-add-line rgeister-btn Add-mobil px-2"><span>Add to bucket</span></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card menu-card">
            <div className="kfc-box"><span></span><span></span><span></span></div>
            <div className="manu-img-item">
              <img 
                className="card-img-top card-img" 
                src={deal3}
                alt="Crispy Duo Box: Turn up the fun with 5 pieces of Hot &amp; Crispy Chicken, 1 Large fries, and 2 Regular drinks" 
              />
            </div>
            <div className="card-body p-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">Crispy Duo Box</h5>
                <span>
                  <button className="btn-item">
                    <i className="ri-heart-line"></i>
                  </button>
                </span>
              </div>
              <p className="card-text">Turn up the fun with 5 pcs Hot &amp; Crispy Chicken + 1 Large fries + 2 Regular drinks</p>
              <h4 className="kfc-price">Rs 1320</h4>
              <div className="price-label">
                <button className="ri-add-line rgeister-btn Add-web px-2"><span>Add to bucket</span></button>
                <button className="ri-add-line rgeister-btn Add-mobil px-2"><span>Add to bucket</span></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card menu-card">
            <div className="kfc-box"><span></span><span></span><span></span></div>
            <div className="manu-img-item">
              <img 
                className="card-img-top card-img" 
                src={deal4} 
                alt="Family Festival 3: An ultimate meal for the family. It includes 4 Zinger burgers, 4 pieces of Hot and Crispy Chicken, 2 Dinner rolls, and a 1.5 Liter drink" 
              />
            </div>
            <div className="card-body p-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">Family Festival 3</h5>
                <span>
                  <button className="btn-item">
                    <i className="ri-heart-line"></i>
                  </button>
                </span>
              </div>
              <p className="card-text">An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink</p>
              <h4 className="kfc-price">Rs 2550</h4>
              <div className="price-label">
                <button className="ri-add-line rgeister-btn Add-web px-2"><span>Add to bucket</span></button>
                <button className="ri-add-line rgeister-btn Add-mobil px-2"><span>Add to bucket</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topdeals;
