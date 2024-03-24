import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from './headerfooter/Navbar';
import Home from './pages/Home'
import Bet from './pages/Bet';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Default from './pages/Default';
import Logout from './pages/Logout';
import axios from 'axios';

function App() {


    const [loggedIn, setLoggedIn] = useState(0)
    const [username, setUsername] = useState(0)
    useEffect(() => {

        axios.get('/isloggedin')
        .then(res => {
            setLoggedIn(res.data.isloggedin)
            setUsername(res.data.isloggedin ? res.data.name :"")
        })
        .catch(e => {
            console.error(e)
        })
    }, []);
    
    const HandleLoggedIn = (e) => {
        axios.get('/isloggedin')
        .then(res => {
            setLoggedIn(res.data.isloggedin)
            setUsername(res.data.isloggedin ? res.data.name :"")
        })
        .catch(e => {
            console.error(e)
        })
      };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar handleLoggedIn={HandleLoggedIn} username={username} isLoggedIn={loggedIn} />}>
                    <Route index element={ <Home/>} />
                    <Route path="login" element={<Login handleLoggedIn={HandleLoggedIn}/>}/>
                    <Route path="logout" element={<Logout handleLoggedIn={HandleLoggedIn}/>}/>
                    <Route path="register" element={<Register handleLoggedIn={HandleLoggedIn}/>}/>
                    <Route path="bets/:name" element={<Bet/>}/>
                    <Route path="default" element={<Default/>}/>
                    <Route path="profile/:username" element={<Profile/>}/>
                    
                    {/* <Route path="*" element={<Default type="error404" result="John F. Kennedy"/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
