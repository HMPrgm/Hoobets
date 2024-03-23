import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'




const Login = () => {

    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        // Initialize form fields
        email: '',
        password: '',
        remember: ''
      });

      const handleChange = (e) => {
        // Update form data as user types
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', formData);
            console.log('Response:', response.data);
            if( response.data.status === "error")
            {
                setError(response.data.message)
            }
            else
            {
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
            <h2>Login</h2>
            <form method="POST" action="/login">
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
                    <input type="submit"/>
                </div>
            </form>
            {error ? <p className="text-danger">Error: {error}</p> : ""}
        </div>
      )
};

export default Login;