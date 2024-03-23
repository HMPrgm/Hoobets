import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './headerfooter/Navbar';
import Home from './pages/Home'
import Bet from './pages/Bet';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={ <Home/>} />
                    <Route path="bet" element={<Bet bet="Elizibeth Orrico Gives stickers"/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="profile" element={<Profile user="John F. Kennedy"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
