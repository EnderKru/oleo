import { NavLink } from "react-router-dom"; 
import './cook-header.css'

export function CookHeader(){
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
                        <div className="tooltiptext-cook">
                        <a href="http://localhost:5173/registration" className="sign-up-cook" >
                            sign up
                        </a>
                        <a href="http://localhost:5173/login" className="log-in-cook" >
                            log in
                        </a>
                        </div>
                    </div>
                   
            </div>
        </header>
    )
}