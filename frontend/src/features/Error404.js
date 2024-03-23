import React from "react";
import '../styles/Default.css'

const Error404 = (props) => {
    try {
        console.log(props)
        return (
            <div className="center"> 
                <h1>404</h1>
                <p>Page not Found :(</p>
            </div>
        )
    } catch (e) 
    {
        return ("defaultState")
    }
};

export default Error404;