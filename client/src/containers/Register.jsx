import React, { useState } from 'react';
import axios from 'axios';
import '../sass/main.scss';

function Register(props) {

    const [user, setUser] = useState({
        email: "",
        password:"",
        confirmPassword: ""
    });

    function handleChange(e) {
        const {id, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    function handleSubmitClick(e) {
        e.preventDefault();
        if (user.password === user.confirmPassword) {
            sendDetailsToDB();
        } else {
            props.showError('Passwords do not match');
        }
    }

    function sendDetailsToDB() {
        if(user.email.length && user.password.length) {
            // console.log(`User details to send are: `);
            // console.log(user);
            const payload = {
                "email":user.email,
                "password":user.password,
            }
            axios.post('/users', payload)
                .then((response) => {
                    if (response.status === 200) {
                        setUser(prevState => ({
                            ...prevState,
                            'SuccessMessage': 'Registration successful.'
                        }))
                    } else {
                        props.showError("Some error ocurred, didn't save user.");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            
        } else {
            props.showError('Please enter valid username and password');
        }
    }

    return (
        <div>
            <h3>Register page</h3>
            <form className="LoginForm">
                
                <label >Email address:</label>
                <input type="email" 
                placeholder="Enter Email" 
                id="email" onChange={handleChange} 
                autoComplete="off"
                />
                
                
                <p className="LoginForm__small-text">
                    We'll never share your email with anyone else.
                </p>
                
                <label>Password :</label>
                <input type="password" 
                placeholder="Password" 
                id="password" onChange={handleChange} 
                autoComplete="off"
                />
                
                <label>Confirm Password :</label>
                <input type="password" 
                placeholder="Confirm Password" 
                id="confirmPassword" onChange={handleChange} 
                autoComplete="off"
                />
                
                <button type="submit" value="Register" onClick={handleSubmitClick} >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
