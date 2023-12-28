import { CookButton } from '../../components/cook-button/cookButton'
import '../signupPage/signup.css'
import { useState } from 'react'
import axios from 'axios'
import { Registration } from './registration'
// import confirmCod from '../components/corfirm_cod'

export function SignupPage() {
    const [isSending, setSending] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [firstNameDirty, setFirstNameDirty] = useState(false)
    const [FirstNameError, setFirtsNameError] = useState("ячейка не должна быть пустым")

    const [username, setUsername] = useState("")
    const [userNameDirty, setUserNameDirty] = useState(false)
    const [userNameError, setUserNameError] = useState("ячейка не должна быть пустым")

    const [email, setEmail] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState("ячейка не должна быть пустым")

    const [password, setPassword] = useState("")
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState("ячейка не должна быть пустым")

    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [passwordConfirmDirty, setPasswordConfirmDirty] = useState(false)
    const [passwordConfirmError, setPasswordConfirmError] = useState("ячейка не должна быть пустым")

    const [confirmCod, setConfirmCod] = useState("")
    const [confirmCodDirty, setConfirmCodDirty] = useState(false)
    const [confirmCodError, setConfirmCodError] = useState("ячейка не должна быть пустым")


    const blurHandler = (e) => {
        switch (e.target.name){
            case "email":
                setEmailDirty(true)

                break
            case "confirm-cod":
                setConfirmCodDirty(true)

                break
            case "firstname":
                setFirstNameDirty(true)

                break
            case "confirm-password":
                setPasswordConfirmDirty(true)

                break
            case "user-password":
                setPasswordDirty(true)

                break
            case "username":
                setUserNameDirty(true)

                break
    }}
    // constructor(props); {
    //     super(props)
    //     state = {
    //         password: "",
    //         password_confirm: "",
    //         first_name: "",
    //         username: "",
    //         email: ""
    //     } 
    // }

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
                            <Registration />
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
