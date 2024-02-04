import './style.css'
import {GetLoggedUser, LogOut} from "../User/User";
import logo from '../../assets/ig-logo.png';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Suggestions from "../Suggestions /Suggestions";
import Users from "../Users/Users";
import Posts from "../Posts/Posts";
import User from "../../models/User";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const [user, setUser] = useState<User | null>(null);
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

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
            <Navbar/>

            <div className="mt-4">
                <div className="container d-flex justify-content-center">
                    <div className="col-9">
                        <div className="row">
                            <div className="col-8">
                                <Users/>
                                <div className="mt-4">
                                    <form className="form-inline">
                                        <input className="form-control" type="search" placeholder="Search posts"
                                               aria-label="Search posts"
                                               value={filter}
                                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                   setFilter(event.target.value);
                                               }}/>

                                    </form>
                                </div>
                                <Posts filter={filter}/>
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
