import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../styles/Login.css'

const Login = () => {

    return (
        <div className="form-main" method="POST" action="/login">
            <form>
                <label>Username: 
                    <input type="text" id="username" name="username"/>
                </label>
                <label>Password: 
                    <input type="text" id="password" name="password"/>
                </label>
                <input type="submit"/>
            </form>
        </div>
      )
};

export default Login;