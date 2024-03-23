import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../styles/Login.css'

const Login = () => {

    return (
        <div className="form-main" >
            <h2>Login</h2>
            <form method="POST" action="/login">
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
                    <input type="submit"/>
                </div>
            </form>
        </div>
      )
};

export default Login;