import React from 'react'
import './BurgerMenu.css'

export default function BurgerMenu() {
    var Menu = {
        el: {
          menu: $('.menu'),
          menuTop: $('.menu-top'),
          menuClose: $('.menu-close'),
          menuMiddle: $('.menu-middle'),
          menuBottom: $('.menu-bottom'),
          menuText: $('.menu-text')
        },
        
        init: function() {
          Menu.bindUIactions();
        },
        
        bindUIactions: function() {
          Menu.el.menu
              .on(
                'click',
              function(event) {
              Menu.activateMenu(event);
              event.preventDefault();
            }
          );
        },
        
        activateMenu: function() {
          Menu.el.menuTop.toggleClass('menu-top-expand expand');
          Menu.el.menuMiddle.toggleClass('menu-middle-expand expand');
          Menu.el.menuBottom.toggleClass('menu-bottom-expand expand'); 
          Menu.el.menuText.toggleClass('menu-text-expand');
          Menu.el.menuClose.toggleClass('menu-close-visible');
        }
      };
        
        //Stop menu item click closing the menu
        $(".menu .menu-global").click(function(e) {
            e.stopPropagation();
      });
      
      Menu.init();
  return (
    <div>
        <ul className="menu">
    <div className="menu-close fa fa-close"></div>
    <li className="menu-global menu-top"><span class="menu-text">Home</span></li>
    <li className="menu-global menu-middle"><span class="menu-text">About Me</span></li>
    <li className="menu-global menu-bottom"><span class="menu-text">My Giraffes</span></li>
  </ul>
  </div>
  )
}



