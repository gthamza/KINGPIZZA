import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import fb from './assets/fb.svg';
import yt from './assets/yt.svg';
import insta from './assets/instagram.svg';

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#212121' }}>
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#C92B5B' }}>
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
            
          </div>
          <div className="fb-logo">
         <img src={fb} alt='fb'></img>
          </div>
          <div className="insta-logo">
         <img src={insta} alt='insta'></img>
          </div>
          <div className="yt-logo">
         <img src={yt} alt='yt'></img>
          </div>
          <div>
            <a href="/" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">MR PIZZA</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              </div>
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><a href="#!" className="text-white">ABOUT US</a></p>
                <p><a href="#!" className="text-white">TRACK ORDER</a></p>
                <p><a href="#!" className="text-white">CAREER</a></p>
              </div>
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><a href="#!" className="text-white">Your Account</a></p>
                <p><a href="#!" className="text-white">Become an Affiliate</a></p>
                <p><a href="#!" className="text-white">Shipping Rates</a></p>
                <p><a href="#!" className="text-white">Help</a></p>
              </div>
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright: <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;