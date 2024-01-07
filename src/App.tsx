import LoginPage from "./components/LoginPage/LoginPage";
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home";

class App extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
export default App;
