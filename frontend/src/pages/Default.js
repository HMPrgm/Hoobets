import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../styles/Default.css'
import RegisterResult from "../features/RegisterResult";



const Default = ({type}) => {

    if (type === "registerresult")
    {
        return (
            <div className="form-main" >
                <RegisterResult />
            </div>
          )
    }
    return (
        <div className="form-main" >
            
        </div>
      )
};

export default Default;