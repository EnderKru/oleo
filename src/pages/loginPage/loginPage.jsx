import {CookButton} from '../../components/cook-button/cookButton'
import '../loginPage/loginPage.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function setInputUsername(event) {
        console.log(event)
        setUsername(event.target.value)
    }

    function setInputPassword(event) {
        setPassword(event.target.value)
    }

    function loginUser(event) {
        event.preventDefault();
        const data = {
            username: username,
            password: password
          };

          axios.post("http://85.209.9.201:777/api/v1/regauth/login/", data).then((response) => {
            navigate('/')
          }).catch(e => {
            alert(e)
          });
    }

  return (
    <div className='login'>
        <a href='/'><img src="/src/assets/images/logo.svg" alt="logo" className="logo" /></a>
        <div className="conteiner-login">
        <div class="login-box">
            <div class="login-task">
                LOG IN
            </div>
            <div class="input-box">
                <input onChange={setInputUsername} type="text" name="username" placeholder="Enter Username"></input>
                <input onChange={setInputPassword} type="password" name="user-password" placeholder="Enter password"></input>
            </div>
            <div class="btns">
                <span onClick={loginUser}>
                    <CookButton />
                </span> 
                <div class="appetit"> Bon appetit </div>
            </div>
            <div class="have-acc">
                Don't have an account? <a href="/registration"> Sign Up</a>
            </div>
                <a class="forgot-password" href="/reset-password">Forgot password?</a>
            </div>
            <div className="berrie">
            </div>
        </div>
    </div>
  )
}
