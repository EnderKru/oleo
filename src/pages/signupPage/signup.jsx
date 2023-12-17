import { CookButton } from '../../components/cook-button/cookButton'
import '../signupPage/signup.css'
import { useState } from 'react'
import {Navlink} from "react-router-dom"
// import confirmCod from '../components/corfirm_cod'

export function SignupPage() {
    const [isSending, setSending] = useState(false)

    function send() {
        setSending(true)
    }
    return <div className = "signup-main">
                <div className='signup'>
                    <a href='/'><img src="/src/assets/images/logo.svg" alt="logo" className="logo" /></a>
                    <div className="conteiner-signup">
                        <div className="box-signup">
                            <div className="signup-task">
                                SIGN UP
                            </div>
                            <div className="input-box">
                                {isSending && ( <div className="email-icon">
                                    <img src="/src/assets/images/email.svg" alt="logo"/>
                                </div>)}
                                {isSending && (<div id="cod-task">We sent you cod to your email. Please check email and confirm it.</div>)}
                                {isSending && (<input type='text' id='confirm-cod' placeholder='Confirm cod'></input>)}
                                {!isSending && (<input type="text" name="firstname" placeholder="Your firstname" ></input>)}
                                {!isSending && (<input type='text' name='username' placeholder='Your username'></input>)}
                                {!isSending && (<input type="email" name="email" placeholder="Enter email"></input>)}
                                {!isSending && (<input type="password" name="user-password" placeholder="Create password"></input>)}
                                {!isSending && (<input type="text" name="confirm-password" placeholder="Confirm password"></input>)}
                            </div>
                            <div className="btns">
                                {!isSending && (<button type='button' onClick={send} id="get-code"> Get Code</button>)}
                                {isSending && (<>
                                                <CookButton/>
                                                </> )}
                                {/* <Component send={[isSending, setSending]}/> */}
                                <div className="appetit"> Bon appetit </div>
                            </div>
                            <div className="have-acc">
                                Already have an account? 
                                <Navlink to="/login">
                                <a> LOG IN</a>
                                </Navlink>
                            </div>
                            </div>
            </div>
        </div>
        <div>
        <div className="berrie">
            </div>
        </div>
    </div>
}
