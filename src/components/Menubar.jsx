import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menubar.css';

function Menubar() {
  const navigate = useNavigate();

  // Handler functions for each button
  const handleEveryDayClick = () => {
    navigate('/every-day');
  };

  const handleALaCarteCombosClick = () => {
    navigate('/a-la-carte-combos');
  };

  const handlePromotionClick = () => {
    navigate('/promotion');
  };

  const handleSignatureBoxesClick = () => {
    navigate('/signature-boxes');
  };

  const handleSnanksClick = () => {
    navigate('/snanks');
  };

  const handleMidnightClick = () => {
    navigate('/midnight');
  };

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={handleEveryDayClick}>Every Day</button>
      <button className="menu-button" onClick={handleALaCarteCombosClick}>ALa-Carte-&-Combos</button>
      <button className="menu-button" onClick={handlePromotionClick}>Promotion</button>
      <button className="menu-button" onClick={handleSignatureBoxesClick}>Signature-Boxes</button>
      <button className="menu-button" onClick={handleSnanksClick}>Snanks</button>
      <button className="menu-button" onClick={handleMidnightClick}>Midnight(Start at 12am)</button>
    </div>
  );
}

export default Menubar;
