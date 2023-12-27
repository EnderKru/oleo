import { NavLink } from 'react-router-dom';
import React from 'react';
import './Header.css';
import '../Adaptive/Adap-header.css';
import { UserContext } from '../../app';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export function Header() {
  const user = React.useContext(UserContext);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15);

    function scroll() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  };

  const scrollToElement = (element, duration) => {
    if (element) {
      const start = window.pageYOffset;
      const end = element.getBoundingClientRect().top;
  
      let startTime = null;
  
      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }
  
        const progress = timestamp - startTime;
        const easeInOutCubic = progress => progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  
        window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
  
        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      };
  
      requestAnimationFrame(scrollStep);
    }
  };
  return (
    <>
      <div className="header">
        <div>
          <div className="logo">
            <NavLink to="/">
              <img src="./src/assets/фото/logo.png" alt="" className="main-logo" />
            </NavLink>
          </div>
        
          <div className="navbar">
            <button id="scrollToTop" onClick={scrollToTop} className="header-button">
              Home
            </button>
            <NavLink to="/cook" className="header-button">
              Cook
            </NavLink>
            <NavLink to="/categories" className="header-button">
              Categories
            </NavLink>
            <button to="/about-us" className="header-button" onClick={() => scrollToElement(document.getElementById('section4'), 1000)}>
              About us
            </button>
            <button  className="header-button" onClick={() => scrollToElement(document.getElementById('section5'), 1000)}>
              Comments
            </button>
            <div className="custom-tooltip">
              <img src="../src/assets/фото/image 8person.png" alt="Mini Photo" className="mini-photo" id="person" />
              {user ? (
                <div className="tooltiptext">
                  <NavLink to="/registration" className="sign-up">
                    log out
                  </NavLink>
                </div>
              ) : (
                <div className="tooltiptext">
                  <NavLink to="/registration" className="sign-up">
                    sign up
                  </NavLink>
                  <NavLink to="/login" className="log-in">
                    log in
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="expand"></div>
        <BurgerMenu />
      </div>
    </>
  );
}
