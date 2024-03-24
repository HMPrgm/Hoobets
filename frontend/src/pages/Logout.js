import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Logout = ({handleLoggedIn}) => {
    const navigate = useNavigate()

    axios.post("/logout", {})
    .then( res => {
        if(res.data.status === 'ok') {
            handleLoggedIn()
            navigate("/")
        }
        
    })
    .catch ( (e) => {
        navigate("/")
    })
}

export default Logout;