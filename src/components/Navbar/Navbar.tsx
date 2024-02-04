import logo from "../../assets/ig-logo.png";
import React from "react";
import {useNavigate} from "react-router-dom";
import {LogOut} from "../User/User";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        LogOut();
        navigate('/');
    };

    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container justify-content-center">
                <div className="d-flex flex-row justify-content-between align-items-center col-9">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" loading="lazy"/>
                    </a>
                    <div className="d-flex flex-row">
                        <ul className="list-inline m-0">
                            <li className="list-inline-item ml-2">
                                <a onClick={handleLogOut}>Log out</a>
                            </li>
                            <li className="list-inline-item ml-2 align-middle">
                                <a href="#" className="link-menu">
                                    <div
                                        className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border topbar-profile-photo">
                                        <img src="https://via.placeholder.com/200x200" alt="..."
                                             style={{
                                                 transform: "scale(1.5)",
                                                 width: "100%",
                                                 position: "absolute",
                                                 left: 0
                                             }}/>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>)
}

export default Navbar;
