import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './headerfooter/Navbar';
import Home from './pages/Home'
import Bet from './pages/Bet';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Default from './pages/Default';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={ <Home/>} />
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="default" element={<Default/>}/>
                    <Route path="registerresult" element={<Default type="registerresult"/>}/>
                    <Route path="profile" element={<Profile user="John F. Kennedy"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
