import {NavLink} from 'react-router-dom'
import React from 'react'
import './Header.css'
import '../Adaptive/Adap-header.css'
import { UserContext } from '../../app'


export function Header() {
  const [user, setUser] = React.useContext(UserContext)


// function scrollToTop(e) {
//   e.preventDefault(); // Отмена дефолтного поведения
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }
function scrollToTop() {
  const duration = 11100; 
  const scrollStep = -window.scrollY / (duration / 15);

  function scroll() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}
  return (
    <>
    <div className="header">
<div>
  <div className="logo">
    <img  src="./src/assets/фото/logo.png" alt="" className='main-logo'  />
  </div>
  <div className="navbar">
  <a href="#" onClick={scrollToTop} className='header-button'>Home</a>

    {/* <button  id="scrollToTop" onClick={scrollToTop} className='header-button'>Home</button> */}
    <NavLink to='/cook'>
    <a href="" className='header-button'>Cook</a>
    </NavLink>
    <NavLink to='/categories'>
    <a href="" className='header-button'>Categories</a>
    </NavLink>
    <a href="" className='header-button' id='about-us'>About us</a>
    <a href="" className='header-button'>Comments</a>
     <div className="custom-tooltip">
            <img src="../src/assets/фото/image 8person.png" alt="Mini Photo" className="mini-photo" id="person" />
            {user ? (
              <div className="tooltiptext">
                <NavLink to='/profile'>
                <a href='' className='sign-up'>profile</a>
                </NavLink>
                <NavLink to='/'>
                  <a href='' className='sign-up'>log out</a>
                </NavLink>
              </div>
            ) : (
              <div className="tooltiptext">
                <NavLink to='/registration'>
                <a href='' className='sign-up'>sign up</a>
                </NavLink>
                <NavLink to='/login'>
                <a href='' className='log-in'>log in</a>
                </NavLink>
              </div>
            )}
            
          </div>
     </div>


</div>
    <div className="expand"></div>
    <div className="menu">
      <img src="../src/assets/фото/menu.png" alt="" className="menu-photo" id="menu" />
      <div className="menutext">
      <a href="#" onClick={scrollToTop} className='header-button'>Home</a>

<a href="" className='header-button'>Cook</a>
<a href="" className='header-button'>Categories</a>
<a href="" className='header-button'>About us</a>
<a href="" className='header-button'>Comments</a>            </div>
    </div>
</div>
    </>
  )
}



