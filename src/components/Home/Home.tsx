import './style.css'
import {GetLoggedUser, LogOut} from "../User/User";
import logo from '../../assets/ig-logo.png';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Suggestions from "../Suggestions /Suggestions";
import Users from "../Users/Users";
import Posts from "../Posts/Posts";
import User from "../../models/User";

const Home = () => {
    const [user, setUser] = useState<User|null>(null);
    const navigate = useNavigate();
    const handleLogOut = () => {
        LogOut();
        navigate('/');
    };

    const handleUnloggedUser = () => {
        GetLoggedUser().catch(() => {
            navigate('/')
        });
    }

    useEffect(() => {
        handleUnloggedUser();

        GetLoggedUser().then((user) => {
            setUser(user);
        });
    }, []);

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container justify-content-center">
                        <div className="d-flex flex-row justify-content-between align-items-center col-9">
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="" loading="lazy"/>
                            </a>
                            <div>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search" />
                                </form>
                            </div>
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
            </div>

            <div className="mt-4">
                <div className="container d-flex justify-content-center">
                    <div className="col-9">
                        <div className="row">
                            <div className="col-8">
                                <Users/>
                                <Posts/>
                            </div>

                            <Suggestions/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
