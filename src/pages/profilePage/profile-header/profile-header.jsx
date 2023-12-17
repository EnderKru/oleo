import React from 'react'

import classes from './profile-header.module.css'
import { NavLink } from 'react-router-dom'

export function ProfileHeader() {
  return (
    <div className={classes.header}>
        <NavLink to='/'>
          <a className='logo'> <img src=''/> </a>
        </NavLink>
    </div>
  )
  }

