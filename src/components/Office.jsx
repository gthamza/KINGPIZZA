import React from 'react';
import './Office.css';

const ContactBox = ({ iconClass, title, contactInfo, address }) => (
  <div className="contact-box">
    <span className="icon-text d-flex align-items-center">
      <i className={iconClass}></i>
      <h5>{title}</h5>
    </span>
    <h4>{contactInfo}</h4>
    {address && (
      <>
        <span className="icon-text d-flex align-items-center mt-3">
          <i className="ri-map-pin-2-fill"></i>
          <h5>Location</h5>
        </span>
        <h4>{address}</h4>
      </>
    )}
  </div>
);

function Office() {
  return (
    <div className="row-custom pb-5">
      <div className="col-custom mt-3">
        <ContactBox
          iconClass="ri-phone-fill"
          title="Head Office"
          contactInfo="0213-5877976"
          address="Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main Clifton Road, Karachi, Pakistan"
        />
      </div>

      <div className="col-custom mt-3">
        <ContactBox
          iconClass="ri-phone-fill"
          title="Regional Office Lahore"
          contactInfo="042-35884570"
          address="27-A Ali Block New Garden Town Opposite Barkat Market Lahore"
        />
      </div>

      <div className="col-custom mt-3">
        <ContactBox
          iconClass="ri-phone-fill"
          title="Regional Office Islamabad"
          contactInfo="0512726877"
          address="United Bakery Building, 11, School Rd, F-6 Markaz F-6, Islamabad, Islamabad Capital Territory 44000"
        />
      </div>

      <div className="col-custom-half mt-3">
        <ContactBox
          iconClass="ri-phone-fill"
          title="Helpline"
          contactInfo="UAN: 111 532 532"
        />
      </div>

      <div className="col-custom-half mt-3">
        <ContactBox
          iconClass="ri-mail-fill"
          title="Complaints Email"
          contactInfo="customercare@kfcpakistan.com"
        />
      </div>
    </div>
  );
}

export default Office;
