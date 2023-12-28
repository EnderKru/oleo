import { CookButton } from '../../components/cook-button/cookButton'
import '../signupPage/signup.css'
import { useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

export function Registration(){
    const [isSending, setSending] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    function send(data) {
        console.log(data)
        // setSending(true)
    }

    console.log(errors)

    return(
    <div>
        <form onSubmit={handleSubmit(send)}>
            <div className="input-box">
                {isSending && ( <div className="email-icon">
                    <img src="/src/assets/images/email.svg" alt="logo"/>
                </div>)}
                {isSending && (<div id="cod-task">We sent you cod to your email. Please check email and confirm it.</div>)}
                {(errors.confirm) && <div style={{color: "red"}}>{errors.confirm}</div>}
                {isSending && (<input {...register("confirm", { required: "Email Address is required" })} type='text' placeholder='Confirm cod'/>)}

                {errors.firstName?.type === "required" && (
                    <p role="alert">First name is required</p>
                )}
                {!isSending && (<input {...register("firstname" , { required: "Email Address is required" })} type="text" placeholder="Your firstname" />)}

                {(errors.username) && <div style={{color: "red"}}>{errors.username}</div>}
                {!isSending && (<input {...register("username")} type='text' placeholder='Your username' />)}

                {(errors.email) && <div style={{color: "red"}}>{errors.email}</div>}
                {!isSending && (<input type="email" {...register("email")} placeholder="Enter email"></input>)}

                {(errors.password) && <div style={{color: "red"}}>{errors.password}</div>}
                {!isSending && (<input type="password"  {...register("password")} placeholder="Create password"/>)}

                {(errors.confirmpassword) && <div style={{color: "red"}}>{errors.confirmpassword}</div>}
                {!isSending && (<input  {...register("confirmpassword")} type="text" placeholder="Confirm password" />)}
            </div>
            <div className="btns">
                {!isSending && (<button type='submit' id="get-code"> Get Code</button>)}
                {isSending && (<>
                                <CookButton/>
                                </> )}
                {/* <Component send={[isSending, setSending]}/> */}
                <div className="appetit"> Bon appetit </div>
            </div>
        </form>
    </div>
)}