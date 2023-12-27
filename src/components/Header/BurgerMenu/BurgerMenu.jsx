// BurgerMenu.jsx
import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={`menu-bg ${isExpanded ? 'fs' : ''}`}></div>
      <div className={`menu-burger ${isExpanded ? 'fs' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      <div className={`menu-items ${isExpanded ? 'fs' : ''}`}>
        <div className='odin'>CALL</div>
        <div className='odin'>DRIVE</div>
        <div className='odin'>MAIL</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
