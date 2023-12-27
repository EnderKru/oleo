import {useState} from "react"
import React from 'react'
import { UserContext } from "../../../app"
import classes from './profile-header.module.css'
import { NavLink } from 'react-router-dom'
 
export function ProfileHeader() {
    const [user, setUser] = React.useContext(UserContext)
    const toggleUserState = () => {
      setUser((prevUser) => !prevUser);
    };

    const handleLogOut =() => {
      toggleUserState()
  }
  return (
    <div className={classes.header}>
      <div className={classes.conteiner}>
        <NavLink to='/'>
          <img className={classes.logo} src='/src/assets/images/logo.svg'/> 
        </NavLink>
        <div className={classes.rightSide}>
          <div className={classes.nav}>
            <ul>
              <NavLink to='/'className={classes.navText}>
              <li >Home</li>
              </NavLink>
              <NavLink to='/cook'className={classes.navText}>
              <li >Cook</li>
              </NavLink>
              <NavLink to='/categories'className={classes.navText}>
              <li >Сategories</li>
              </NavLink>
              <NavLink to='/'className={classes.navText}>
              <li >About us</li>
              </NavLink>
              <NavLink to='/'className={classes.navText}>
              <li >Comments</li>
              </NavLink>
            </ul>
          </div>
          <div className={classes.customToolTip}>
            <img src="../src/assets/фото/image 8person.png" alt="Mini Photo" className={classes.userImg} />
            <div className={classes.tooltiptext}>
              <NavLink to="/">
                <div className={classes.logOut} onClick={handleLogOut}>log out</div>
              </NavLink>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
  }

