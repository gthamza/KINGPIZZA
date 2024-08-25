import React from 'react';
import './Menucards.css'; 

const cardsData = [
  {
    title: 'Promotion',
    image: 'https://www.kfcpakistan.com/images/961300b0-4551-11ef-b48c-a54d8b3e86b1-Thumbnail(1)-2024-07-18220338.png',
    link: '/menu'
  },
  {
    title: 'Signature-Boxes',
    image: 'https://www.kfcpakistan.com/images/afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png',
    link: '/menu'
  },
  {
    title: 'Sharing',
    image: 'https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-Sharing-2023-05-31095826.png',
    link: '/menu'
  },
  
  {
    title: 'Ala-Carte-&-Combos',
    image: 'https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png',
    link: '/menu'
  },
  {
    title: 'Signature-Boxes',
    image: 'https://www.kfcpakistan.com/images/afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png',
    link: '/menu'
  },
];

function Menucards() {
  return (
    <div className="container mt-5">
      <h2>EXPLORE MENU</h2>
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card menu-card h-100">
              <a href={card.link}>
                <img src={card.image} className="card-img-top" alt={card.title} />
              </a>
              <div className="card-body text-center">
                <h6 className="card-title">{card.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menucards;
