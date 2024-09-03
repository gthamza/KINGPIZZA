import './Address.css';
import React from 'react';

function Address() {
  return (
    <div className="Address">
      <h1 className="title">MR PIZZA & FAST FOOD</h1>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.558993832542!2d69.11253957454151!3d27.854094019005498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393689b70ed08e1d%3A0x3f0a00980ee07771!2sMR%20PIZZA%20%26%20FAST%20FOOD!5e0!3m2!1sen!2s!4v1725288707055!5m2!1sen!2s"
          width="950"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Address;
