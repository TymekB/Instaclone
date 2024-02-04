import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import {LogIn, GetLoggedUser} from "../Authorization/User";
import './style.css'

const LoginPage = () => {
    const [login, setLoginValue] = useState('');
    const [password, setPasswordValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        handleLoggedUser();
    }, []);

    const handleLoggedUser = () => {
        GetLoggedUser()?.then((user) => {
            navigate('/home');
        });
    }

    const handleLogin = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();

        LogIn(login, password).then(() => {
            navigate('/home');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
             <div className="login">
                <h1>
                    <img src="https://i.imgur.com/wvLiKam.png" width="200px" height="68px"/>
                </h1>

                <form action="" method="POST">
                    <input placeholder="Username or email" type="text" name="username" value={login}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               setLoginValue(event.target.value);
                           }}/>
                    <input placeholder="Password" type="password" name="password" value={password}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               setPasswordValue(event.target.value);
                           }}/>

                    <input type="submit" value="Log In" onClick={handleLogin}/><br/>
                </form>

                <div className="divider"><b>OR</b></div>

                <div className="fbwrapper">
                    <div className="fb">
                        <a href="https://facebook.com"><img src="https://i.imgur.com/exksovo.png"/> Log in
                            with Facebook</a></div>
                </div>

                <div className="forgotwrapper">
                    <div className="forgot"><a href="https://instagram.com">Forgot password?</a></div>
                </div>
            </div>

            <div className="infobox">
                <p>Don't have an account? <a href="https://instagram.com">Sign up</a></p>
            </div>

            <div className="apps">
                <p>Get the app.</p>
                <span><a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
                    <img src="https://i.imgur.com/lREV6Qa.png" height="45px" width="153px"/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXRR9_gALAAHKOzMSO3MkAOZ0JJtC%26utm_content%3Dlo%26utm_medium%3Dbadge">
                    <img src="https://i.imgur.com/DFQNKXK.png" height="45" width="151px"/>
                </a>
                </span>

            </div>

            <div className="footer">
                <p>
                    <a href="https://www.instagram.com/about/us/">ABOUT US</a>
                    <a href="https://help.instagram.com/">SUPPORT</a>
                    <a href="https://instagram-press.com/">PRESS</a>
                    <a href="https://www.instagram.com/developer/">API</a>
                    <a href="https://www.instagram.com/about/jobs/">JOBS</a>
                    <a href="https://help.instagram.com/519522125107875">PRIVACY</a>
                    <a href="https://help.instagram.com/581066165581870">TERMS</a>
                    <a href="https://www.instagram.com/explore/locations/">DIRECTORY</a>
                    <a href="https://www.instagram.com/directory/profiles/">PROFILES</a>
                    <a href="https://www.instagram.com/directory/hashtags/">HASHTAGS</a>
                    <a href="">LANGUAGE</a>
                    <span>© {(new Date()).getFullYear()} INSTAGRAM</span>
                </p>
            </div>
        </div>
    );
}

export default LoginPage
