import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../styles/Default.css'
import Error404 from "../features/Error404";



const Default = ({type, result}) => {

    
    if (type === "error404")
    {
        return (
            <div className="form-main" >
                <Error404 result={result}/>
            </div>
          )
    }
    return (
        <div className="form-main" >
            
        </div>
      )
};

export default Default;