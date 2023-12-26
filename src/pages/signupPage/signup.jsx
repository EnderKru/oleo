import { CookButton } from '../../components/cook-button/cookButton'
import '../signupPage/signup.css'
import { useState } from 'react'
import axios from 'axios'
// import confirmCod from '../components/corfirm_cod'

export function SignupPage() {
    const [isSending, setSending] = useState(false)

    constructor(props); {
        super(props)
        state = {
            password: "",
            password_confirm: "",
            first_name: "",
            username: "",
            email: ""
        } 
    }

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
                                {!isSending && (<input type="text" name="firstname" placeholder="Your firstname" onChange={(e)=> this.setState({ first_name: e.target.value})} ></input>)}
                                {!isSending && (<input type='text' name='username' placeholder='Your username' onChange={(e)=> this.setState({ username: e.target.value})}></input>)}
                                {!isSending && (<input type="email" name="email" placeholder="Enter email" onChange={(e)=> this.setState({ email: e.target.value})}></input>)}
                                {!isSending && (<input type="password" name="user-password" placeholder="Create password" onChange={(e)=> this.setState({ password: e.target.value})}></input>)}
                                {!isSending && (<input type="text" name="confirm-password" placeholder="Confirm password" onChange={(e)=> this.setState({ password_confirm: e.target.value})}></input>)}
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
                                Already have an account? <a href="/login"> LOG IN</a>
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
