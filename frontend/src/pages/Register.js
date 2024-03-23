import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../styles/Login.css'
const registerUser = () => {
    axios.post('/bets', {
        amount:10
    })
    .then(res => {
        
    })
    .catch(e=>{
        console.error(e)

    })
}

const Register = () => {

    return (
        <div className="form-main" >
            <h2>Register</h2>
            <form method="POST" action="/signup">
            <div className="form-line">
                    <label>Email: 
                        <input type="text" id="email" name="email"/>
                    </label>
                </div>
            <div className="form-line">
                    <label>Username:
                        <input type="text" id="username" name="username"/>
                    </label>
                </div>
                <div className="form-line">
                    <label>Password: 
                        <input type="password" id="password" name="password"/>
                    </label>
                </div>
                <div className="form-line">
                    <label>Confirm Password: 
                        <input type="password" id="confirmpassword" name="confirmpassword"/>
                    </label>
                </div>
                <div className="form-line">
                    <label>Remember: 
                    <input type="checkbox" id="remember" name="remember"/>
                    </label>
                </div>
                <div className="form-line">
                    <input type="submit" id="remember" name="remember"/>
                </div>
            </form>
             
        </div>
      )
};

export default Register;