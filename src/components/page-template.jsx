import React, {useState} from 'react'
import {Header} from './Header/Header'
import {Footer} from './Footer/Footer'

export const PageTemplate = ({children}) => {

  return (
    <div>
      <Header />
      {children}
      <Footer />
      
    </div>
  )
}