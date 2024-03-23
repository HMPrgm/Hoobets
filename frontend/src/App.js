import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './headerfooter/Navbar';
import Home from './pages/Home'
import Bet from './pages/Bet';
import Profile from './pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={ <Home/>} />
                    <Route path="bet" element={<Bet bet="Elizibeth Orrico Gives stickers"/>}/>
                    <Route path="profile" element={<Profile user="John F. Kennedy"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
