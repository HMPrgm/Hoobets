import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = ({handleLoggedIn}) => {

    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        // Initialize form fields
        email: '',
        username: '',
        password: '',
        confirmpassword: '',
        remember: ''
      });

      const handleChange = (e) => {
        // Update form data as user types
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/signup', formData);
            console.log('Response:', response.data);
            if( response.data.status === "error")
            {
                setError(response.data.message)
            }
            else
            {
                handleLoggedIn()
                navigate({
                    pathname: "/",
                    state: response.data
                })
            }
          // Optionally, reset form fields after successful submission
          setFormData({
            email: '',
            username: '',
            password: '',
            confirmpassword: '',
            remember: ''
          });
        } catch (error) {
          console.error('Error:', error);
        }
      };
    return (
        <div className="form-main" >
            <h2>Register</h2>
            <form method="POST" onSubmit={handleSubmit}>
            <div className="form-line">
                    <label>Email: 
                        <input 
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required/>
                    </label>
                </div>
            <div className="form-line">
                    <label>Username:
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required/>
                    </label>
                </div>
                <div className="form-line">
                    <label>Password: 
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required/>
                    </label>
                </div>
                <div className="form-line">
                    <label>Confirm Password: 
                    <input 
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        value={formData.confirmpassword}
                        onChange={handleChange}
                        required/>
                    </label>
                </div>
                <div className="form-line">
                    <label>Remember: 
                    <input 
                        type="checkbox"
                        id="remember"
                        name="remember"
                        value={formData.remember}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form-line">
                    <input type="submit" />
                </div>
            </form>
            {error ? <p className="text-danger">Error: {error}</p> : ""}
        </div>
      )
};

export default Register;