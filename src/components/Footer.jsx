import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Footer.css';
import fb from '../assets/fb.svg';
import yt from '../assets/yt.svg';
import insta from '../assets/instagram.svg';

const SocialMediaLink = ({ href, imgSrc, altText }) => (
  <a href={href}>
    <img src={imgSrc} alt={altText} className="social-logo" />
  </a>
);

const FooterColumn = ({ title, links }) => (
  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    <h6 className="text-uppercase fw-bold">{title}</h6>
    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
    {links.map((link, index) => (
      <p key={index}>
        <a href={link.href} className="text-white">{link.text}</a>
      </p>
    ))}
  </div>
);

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#212121' }}>
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#C92B5B' }}>
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="d-flex">
          <SocialMediaLink href="#" imgSrc={fb} altText="Facebook" />
          <SocialMediaLink href="#" imgSrc={insta} altText="Instagram" />
          <SocialMediaLink href="#" imgSrc={yt} altText="YouTube" />
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">MR PIZZA</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            </div>

            <FooterColumn 
              title="Contact"
              links={[
                { href: "#", text: "ABOUT US" },
                { href: "#", text: "TRACK ORDER" },
                { href: "#", text: "CAREER" },
              ]}
            />

            <FooterColumn 
              title="Useful links"
              links={[
                { href: "#", text: "Your Account" },
                { href: "#", text: "Become an Affiliate" },
                { href: "#", text: "Shipping Rates" },
                { href: "#", text: "Help" },
              ]}
            />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><i className="fas fa-home mr-3"></i> PANO AKIL, SUKKUR</p>
              <p><i className="fas fa-envelope mr-3"></i> MRPIZZA@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> +01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> +01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: <a className="text-white" href="https://mdbootstrap.com/">MR.PIZZA</a>
      </div>
      
    </footer>
  );
}

export default Footer;
