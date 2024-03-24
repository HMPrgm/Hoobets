import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = ({ handleLoggedIn }) => {

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
            if (response.data.status === "error") {
                setError(response.data.message)
            }
            else {
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
        // <div className="form-main" >
        //     <h2>Register</h2>
        //     <form method="POST" onSubmit={handleSubmit}>
        //         <div className="form-line">
        //             <label htmlFor="email" className="form-label">Email:
        //                 <input
        //                     className="form-control"
        //                     type="text"
        //                     id="email"
        //                     name="email"
        //                     value={formData.email}
        //                     onChange={handleChange}
        //                     required />
        //             </label>
        //         </div>
        //         <div className="form-line">
        //             <label className="form-label">Username:
        //                 <input
        //                     className="form-control"
        //                     type="text"
        //                     id="username"
        //                     name="username"
        //                     value={formData.username}
        //                     onChange={handleChange}
        //                     required />
        //             </label>
        //         </div>
        //         <div className="form-line">
        //             <label className="form-label">Password:
        //                 <input
        //                     type="password"
        //                     className="form-control"
        //                     id="password"
        //                     name="password"
        //                     value={formData.password}
        //                     onChange={handleChange}
        //                     required />
        //             </label>
        //         </div>
        //         <div className="form-line">
        //             <label className="form-label">Confirm Password:
        //                 <input
        //                     type="password"
        //                     className="form-control"
        //                     id="confirmpassword"
        //                     name="confirmpassword"
        //                     value={formData.confirmpassword}
        //                     onChange={handleChange}
        //                     required />
        //             </label>
        //         </div>
        //         <div className="form-line">
        //             <label form-check-label>Remember:
        //                 <input
        //                     type="checkbox"
        //                     id="remember"
        //                     name="remember"
        //                     className="form-check-input mb-2"
        //                     value={formData.remember}
        //                     onChange={handleChange}
        //                 />
        //             </label>
        //         </div>
        //         <div className="form-line">
        //             <input type="submit" />
        //         </div>
        //     </form>
        //     {error ? <p className="text-danger">Error: {error}</p> : ""}
        // </div>
        <div className="d-flex flex-column p-5 justify-content-center bg-light p-1 mt-4 rounded" style={{width: "max-content", marginRight:"auto", marginLeft:"auto"}} >

        <h2>Register</h2>
        <form method="POST" onSubmit={handleSubmit}>
        <div className="form-line">
                <label htmlFor="email" className="form-label">Email: 
                    <input 
                    type="text"
                    className="form-control"
                    style = {{paddingRight: 100}}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required/>
                </label>
            </div>
            <div className="form-line">
                <label htmlFor="username" className="form-label">Username: 
                    <input 
                    type="text"
                    className="form-control"
                    style = {{paddingRight: 100}}
                    id="email"
                    name="email"
                    value={formData.username}
                    onChange={handleChange}
                    required/>
                </label>
            </div>
            <div >
                <label htmlFor="password" className="form-label">Password: 
                    <input 
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        style = {{paddingRight: 100}}
                        value={formData.password}
                        onChange={handleChange}
                        required/>
                </label>
            </div>
            <div >
                <label htmlFor="confirmpassword" className="form-label">Confirm Password: 
                    <input 
                        type="password"
                        className="form-control"
                        id="confirmpassword"
                        name="confirmpassword"
                        style = {{paddingRight: 100}}
                        value={formData.confirmpassword}
                        onChange={handleChange}
                        required/>
                </label>
            </div>
            <div >
                <label htmlFor="remember" className="form-check-label"
                style={{marginRight: 10}}
                >Remember:                     </label>

                <input 
                    type="checkbox"
                    id="remember"
                    className="form-check-input mb-2"
                    name="remember"
                    value={formData.remember}
                    onChange={handleChange}
                    />
            </div>
            <div className="form-line">
                <input 
                className="btn btn-secondary"
                
                type="submit"/>
            </div>
        </form>
        {error ? <p className="text-danger">Error: {error}</p> : ""}
    </div>
    )
};

export default Register;