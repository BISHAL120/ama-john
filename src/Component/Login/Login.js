import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleemailblur = event => {
        setEmail(event.target.value);
    }

    const handlepasswordblur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, {replace:true});
    }

    const handlesingin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handlesingin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleemailblur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlepasswordblur} type="password" name="password" id=""  required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    <input className='form-submit' type="Submit" value="Login"  required/>
                </form>
                <p className='p'>
                    New to Ema-john? <Link className='form-link' to='/singup'>Create New Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;