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
    const [credits, setCredits] = useState(0)
    useEffect(() => {

        axios.get('/isloggedin')
        .then(res => {
            setLoggedIn(res.data.isloggedin)
            setUsername(res.data.isloggedin ? res.data.name :"")
            setCredits(res.data.isloggedin ? res.data.credits :"")
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
            setCredits(res.data.isloggedin ? res.data.credits :"")
        })
        .catch(e => {
            console.error(e)
        })
      };
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar handleLoggedIn={HandleLoggedIn} username={username} isLoggedIn={loggedIn} credits={credits} />}>
                    <Route index element={ <Home loggedIn={loggedIn} />}/>
                    <Route path="login" element={<Login handleLoggedIn={HandleLoggedIn}/>}/>
                    <Route path="logout" element={<Logout handleLoggedIn={HandleLoggedIn}/>}/>
                    <Route path="register" element={<Register handleLoggedIn={HandleLoggedIn}/>}/>
                    <Route path="bets/:name" element={<Bet credits={credits} handleLoggedIn={HandleLoggedIn}/>}/>
                    <Route path="default" element={<Default/>}/>
                    <Route path="profile/:username" element={<Profile credits={credits}/>}/>
                    
                    {/* <Route path="*" element={<Default type="error404" result="John F. Kennedy"/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
