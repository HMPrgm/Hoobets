import React from "react";
import '../styles/Default.css'

const RegisterResult = (props) => {
    try {
        console.log(props)
        return (
            <div className="center"> 
                {props.location.state.status}
            </div>
        )
    } catch (e) 
    {
        return ("defaultState")
    }
};

export default RegisterResult;