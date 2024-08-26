import React from 'react';
import './Menubar.css';

function Menubar() {
  return (
    <div className="menu-container">
      <button className="menu-button">Every Day</button>
      <button className="menu-button">ALa-Carte-&-Combos</button>
      <button className="menu-button">Promotion</button>
      <button className="menu-button">Signature-Boxes</button>
      <button className="menu-button">Sharing</button>
      <button className="menu-button">Midnight(Start at 12am)</button>
    </div>
    
  );
}

export default Menubar;
