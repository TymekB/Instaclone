import LoginPage from "./components/LoginPage/LoginPage";
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home";
import UserCard from "./components/UserCard/UserCard";

class App extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/home" element={<Home />} />
                    <Route path={"/user/:id"} element={<UserCard />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
export default App;
