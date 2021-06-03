import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

function Register(props) {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    
    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors(); 
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user; 

    const onChange = e => setUser({ ...user,  [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const isEmailAuth = await axios.get(`api/auth_users/email/${email}`);
        console.log(isEmailAuth.data);

        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else if (!email.includes("hiskysat")) {
            setAlert('Sorry, not authorized email address', 'danger');
        } else if (isEmailAuth.data.length === 0) {
            setAlert('Sorry, your email is not in our list', 'danger');
        } else {
            register({
                name,
                email,
                password
            });
        }    
    }

    return (
        <div>
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form className="LoginForm" onSubmit={onSubmit}>
                <div className="form-group">
                     <label htmlFor="name"> Name</label>
                     <input type="text" name="name" value={name} onChange={onChange} required/>
                </div>
                <div className="form-group">
                     <label htmlFor="email"> Email Address</label>
                     <input type="email" name="email" value={email} onChange={onChange} required/>
                </div>
                <div className="form-group">
                     <label htmlFor="password"> Password</label>
                     <input type="password" name="password" 
                        value={password} onChange={onChange} required minLength="6" />
                </div>
                <div className="form-group">
                     <label htmlFor="password2">confirm Password </label>
                     <input type="password" name="password2" 
                        value={password2} onChange={onChange} required minLength="6" />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Register;