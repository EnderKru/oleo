import { NavLink } from "react-router-dom"; 
import React from "react";
import { UserContext } from '../../../app'

export function CookHeader(){
    const [user, setUser] = React.useContext(UserContext)
  const toggleUserState = () => {
    setUser((prevUser) => !prevUser);
  };

  const handleLogOut =() => {
    toggleUserState()
  }
    return(
        <header>
            <div style={{
                width: "100%",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
                
                }}>
                            <NavLink to="/">
                    <img src="./src/assets/фото/logo.png" className="logo-cook" alt="Logo" />
                    </NavLink>
                    <div className="custom-tooltip-cook">
                        <img
                        src="../src/assets/фото/image 8person.png"
                        alt="Mini Photo"
                        className="mini-photo-cook"
                        id="person-cook"
                        />
                        {user ? (
                        <div className="tooltiptext-cook">
                            <NavLink to='/profile'>
                            <a href='' className='sign-up'>profile</a>
                            </NavLink>
                            <NavLink to="/">
                            <a href='' onClick={handleLogOut} className='sign-up'>log out</a>
                            </NavLink>
                        </div>
                        ) : (
                        <div className="tooltiptext-cook">
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
        </header>
    )
}