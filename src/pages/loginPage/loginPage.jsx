import '../loginPage/loginPage.css'

export function LoginPage() {
  return (
    <div className='login'>
        <img src="/src/assets/images/logo.svg" alt="logo" className="logo" />
        <div class="login-box">
            <div class="login-task">
                LOG IN
            </div>
            <div class="input-box">
                <input type="text" name="username" placeholder="Enter Username"></input>
                <input type="password" name="user-password" placeholder="Enter password"></input>
                <div class="or">
                    OR
                </div>
                <input type="email" name="email" placeholder="Enter email"></input>
                <input type="password" name="email-password" placeholder="Enter email password" ></input>
            </div>
            <div class="button">
                <button class="cook"> Cook </button> 
                <div class="appetit"> Bon appetit </div>
            </div>
            <div class="have-acc">
                Don't have an account? <a href="a"> Sign Up</a>
            </div>
                <a class="forgot-password" href="@">Forgot password?</a>
            </div>
            <div className="berrie">
            </div>
    </div>
  )
}
