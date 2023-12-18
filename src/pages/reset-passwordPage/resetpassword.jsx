import '../reset-passwordPage/resetpassword.css'
import { useState } from 'react'
import { CookButton } from '../../components/cook-button/cookButton'

export function ResetPasswordPage() {
    const [isSending, setSending] = useState(false)

    function send() {
        setSending(true)
    }
  return (
    <div className='reset'>
        <a href='/'><img src="/src/assets/images/logo.svg" alt="logo" className="logo" /></a>
        <div className="reset-conteiner">
        <div className="reset-box">
        <div class="reset-task">
                Reset Password
            </div>
            <div class="input-box">
                {isSending && ( <div className="email-icon">
                    <img src="/src/assets/images/email.svg" alt="logo"/>
                </div>)}
                {isSending && (<div id="cod-task">We sent you cod to your email. Please check email and confirm it.</div>)}
                {isSending && (<input type='text' id='confirm-cod' placeholder='Confirm cod'></input>)}
                {!isSending &&<input type="email" name="email" placeholder="Enter email"></input>} 
            </div>
            <div className="btn">
                {!isSending && (<button type='button' onClick={send} id="get-code"> Get Code</button>)}
                {isSending && (<><CookButton/></>)}
                <div className="appetit"> Bon appetit </div>
            </div>  
        </div>
    </div>
        </div>
  )
}
