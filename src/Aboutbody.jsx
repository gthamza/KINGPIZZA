import React from 'react';
import './Aboutbody.css';
import hand from './assets/hand.png';
import home from './assets/home.png';
import pak from './assets/pak.png';
import chicken from './assets/chicken.png'
import logo from './assets/logo.svg';

function Aboutbody() {
  return (
    <>
      <h2 className="about-title">ABOUT US</h2>
      <section className="about-kfc">
        <div className="row">
          <article className="col-lg-7 col-md-6">
            <p>
              MR PIZZA entered Pakistan in 1997 and since then, it’s been a journey full of excitement and Finger Lickin’ goodness! The first MR PIZZA restaurant opened in Gulshan Iqbal, Karachi and now our Finger Lickin’ Chicken is available in 37 cities with over 128 restaurants! Being the most loved fast food chain in Pakistan, MR PIZZA leaves no stone unturned to provide its customers the most delicious chicken and an excellent dining experience.
            </p>
          </article>
          <aside className="col-lg-5 col-md-6">
            <h4 className="kfc-quality">
              WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL INGREDIENTS FROM TRUSTED SUPPLIERS
            </h4>
          </aside>
        </div>
      </section>
      <div className="container">
        <div className="MR PIZZA-bhook">
          <center><img src={logo} alt="MitaoBhook" /><h1>MR PIZZA</h1></center>
          <p>
            is MR PIZZA’s pledge to give back to society. Over the years we have made it our mission to spread the message of hope, bringing positive change in the lives of people and providing better living standards. Mitao Bhook strengthens the community on the pillars of Education, Inclusion &amp; Diversity.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutbody;

