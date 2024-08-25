import React from 'react';
import './Office.css';

function Office() {
  return (
    <>
      <div className="row-custom pb-5">
        <div className="col-custom mt-3">
          <div className="contact-box">
            <span className="icon-text d-flex align-items-center">
              <i className="ri-phone-fill"></i>
              <h5>Head Office</h5>
            </span>
            <h4>0213-5877976</h4>
            <span className="icon-text d-flex align-items-center mt-3">
              <i className="ri-map-pin-2-fill"></i>
              <h5>Location</h5>
            </span>
            <h4>Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main Clifton Road, Karachi, Pakistan</h4>
          </div>
        </div>

        <div className="col-custom mt-3">
          <div className="contact-box">
            <span className="icon-text d-flex align-items-center">
              <i className="ri-phone-fill"></i>
              <h5>Regional Office Lahore</h5>
            </span>
            <h4>042-35884570</h4>
            <span className="icon-text d-flex align-items-center mt-3">
              <i className="ri-map-pin-2-fill"></i>
              <h5>Location</h5>
            </span>
            <h4>27-A Ali Block New Garden Town Opposite Barkat Market Lahore</h4>
          </div>
        </div>

        <div className="col-custom mt-3">
          <div className="contact-box">
            <span className="icon-text d-flex align-items-center">
              <i className="ri-phone-fill"></i>
              <h5>Regional Office Islamabad</h5>
            </span>
            <h4>0512726877</h4>
            <span className="icon-text d-flex align-items-center mt-3">
              <i className="ri-map-pin-2-fill"></i>
              <h5>Location</h5>
            </span>
            <h4>United Bakery Building, 11، School Rd, F-6 Markaz F-6, Islamabad, Islamabad Capital Territory 44000</h4>
          </div>
        </div>

        <div className="col-custom-half mt-3">
          <div className="contact-box">
            <span className="icon-text d-flex align-items-center">
              <i className="ri-phone-fill"></i>
              <h5>Helpline</h5>
            </span>
            <h4>UAN: 111 532 532</h4>
          </div>
        </div>

        <div className="col-custom-half mt-3">
          <div className="contact-box">
            <span className="icon-text d-flex align-items-center">
              <i className="ri-mail-fill"></i>
              <h5>Complaints Email</h5>
            </span>
            <h4>customercare@kfcpakistan.com</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Office;
