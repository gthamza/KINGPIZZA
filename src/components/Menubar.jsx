import React, { useState } from 'react';
import './Menubar.css';
import ALA from './ALA';
import Promotion from './Promotion';
import Signature from './Signature';
import Everydayvalue from './Everydayvalue';
import Midnight from './Midnight';
import Snacks from './Snacks';

function Menubar() {
  const [activeComponent, setActiveComponent] = useState('Everydayvalue');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      //  case 'Everydayvalue':
      //   return <Everydayvalue />;
      case 'ALA':
        return <ALA />;
      case 'Promotion':
        return <Promotion />;
      case 'Signature':
        return <Signature />;
      case 'Snacks':
        return <Snacks />;
      case 'Midnight':
        return <Midnight />;
      default:
        return null;
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-buttons">
        <button className="menu-button" onClick={() => handleButtonClick('Everydayvalue')}>Every Day</button>
        <button className="menu-button" onClick={() => handleButtonClick('ALA')}>ALa-Carte-&-Combos</button>
        <button className="menu-button" onClick={() => handleButtonClick('Promotion')}>Promotion</button>
        <button className="menu-button" onClick={() => handleButtonClick('Signature')}>Signature-Boxes</button>
        <button className="menu-button" onClick={() => handleButtonClick('Snacks')}>Snacks</button>
        <button className="menu-button" onClick={() => handleButtonClick('Midnight')}>Midnight (Starts at 12am)</button>
      </div>

      <div className="content-container">
        {renderActiveComponent()}
      </div>
    </div>
  );
}

export default Menubar;
