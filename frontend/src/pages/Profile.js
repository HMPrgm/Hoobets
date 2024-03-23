import React, {useState, useEffect} from "react";
import axios from 'axios'

const Profile = ({user}) => {
    return (
        <h1>{user}</h1>
      )
};

export default Profile;