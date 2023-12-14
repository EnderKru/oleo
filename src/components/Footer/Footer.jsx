import React from 'react'
import './Footer.css'
import '../Adaptive/Adap-footer.css'

export function Footer() {
  return (
    
    < div className="footer">
      <div className='ending'>
        <div className="end-1">
        <img src="./src/assets/фото/logo.png" alt="" className='logotip' />
        <div className='title-of-end'>
        Explore the World of Flavors!
        
        </div>
        </div>
        <div className="subt">Copyright © 2010-2023 Oleo Company S.L. All rights reserved.</div>
        <div className="contacts">
          <div className="title-of-contacts">
            CONTACT US
          </div>
          <div className="number">
            <img src="./src/assets/фото/Без имени 1.png" alt="" className='numb' />
            <div className="number-of-phone">0777161701</div>

          </div>
          <div className="email">
            <img src="./src/assets/фото/Без имени 2.png" alt=""className='mail' />
            <div className='email-of-ender'>enderpro700@gmail.com</div>
          </div>
          <div className="locat">
            <img src="./src/assets/фото/Без имени 4.png" alt=""className='local' />
            <div className='alatoo-loc'>Ala too college</div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
