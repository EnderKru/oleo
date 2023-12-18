import classes from './prof-body.module.css'

export function ProfileBody(){
    function editProfile(){
        alert("You cant edit it now. sorry")
    }
    function dontWork(){
        alert("this also doesn't work.")
    }
    return(
        <div className={classes.profBody}>
            <div className={classes.conteiner}>
                <div className={classes.user}>
                    <div className={classes.userInfo}>
                        <img src="../src/assets/фото/image 8person.png" alt="Mini Photo" />
                        <div className={classes.userName}>
                            <div className={classes.userNickname}>NickName</div>
                            <div className={classes.userFirstname}>FirstName</div>
                        </div>
                    </div>
                    <button className={classes.userEdit} onClick={editProfile}>edit profile</button>
                    
                </div>
                <div className={classes.personalData}>
                    <div className={classes.parsDataTask}>Personal data </div>
                    <div className={classes.personalInfo}>
                    <div className={classes.emailBlock}>
                        <div className={classes.leftEmail}>
                            <div className={classes.email}>
                                <img src='../src/assets/images/email-icon.svg'/>
                                <div className={classes.emailInfo}>
                                    <div className={classes.task}>email</div>
                                    <div className={classes.sub}>em***@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.rightEmail}>
                            <button className={classes.change} onClick={dontWork}>change</button>
                        </div>
                    </div>
                    <div className={classes.passwordBlock}>
                        <div className={classes.leftPassword}>
                            <div className={classes.password}>
                            <img src='../src/assets/images/key.svg'/>
                            <div className={classes.passwordInfo}>
                                <div className={classes.task}>password</div>
                                <div className={classes.sub}>**********</div>
                            </div>
                            </div> 
                        </div>
                        <div className={classes.rightPassword}>
                            <button className={classes.change} onClick={dontWork}>change</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={classes.aboutYou}>
                <div className={classes.aboutTask}>About You </div>
                    <div className={classes.aboutInfo}>
                    <div className={classes.favorBlock}>
                        <div className={classes.leftFavor}>
                            <div className={classes.favor}>
                                <img src='../src/assets/images/favorites.svg'/>
                                <div className={classes.task}>favorite dishes</div>
                            </div>
                        </div>
                        <div className={classes.rightfavor}>
                            <button className={classes.view} onClick={dontWork}>view</button>
                        </div>
                    </div>
                    <div className={classes.historyBlock}>
                        <div className={classes.leftHistory}>
                            <div className={classes.history}>
                            <img src='../src/assets/images/book.svg'/>
                            <div className={classes.task}>history of dishes </div>
                            </div> 
                        </div>
                        <div className={classes.rightHistory}>
                            <button className={classes.view} onClick={dontWork}>view</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}