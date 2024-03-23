import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../styles/Login.css'

const Login = () => {

    return (
        <div className="form-main" method="POST" action="/login">
            <h2>Login</h2>
            <form>
                <label>Username: 
                    <input type="text" id="username" name="username"/>
                </label>
                <label>Password: 
                    <input type="password" id="password" name="password"/>
                </label>
                <input type="submit"/>
            </form>
        </div>
      )
};

export default Login;