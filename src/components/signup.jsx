import '../styles/signup.css'


function Signup() {
    return <div className='signup'>
        <img src="/src/assets/images/logo.png" alt="logo" className="logo" />
        <div className="conteiner">
        <div className="box">
            <div class="signup-task">
                SIGN UP
            </div>
            <div className="input-box">
                <input type='text' name='username' placeholder='Your username'></input>
                <input type="email" name="email" placeholder="Enter email"></input>
                <input type="password" name="email-password" placeholder="Enter email password" ></input>
                <input type="password" name="user-password" placeholder="Create password"></input>
                <input type="text" name="confirm-password" placeholder="Confirm password"></input>
            </div>
            <div className="button">
            <button id="Cook"> Cook </button> 
            <div className="appetit"> Bon appetit </div>
        </div>
        <div className="have-acc">
            Already have an account? <a href="a"> LOG IN</a>
        </div>
        <a className="forgot-password" href="@">Forgot password?</a>
        </div>
        <div className="berrie">
        </div>
        </div>
    </div>
    
}
export default Signup