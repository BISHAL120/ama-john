import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import auth from '../../firebase.init';



const Singup = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleemailblur = event => {
        setEmail(event.target.value);
    }

    const handlepasswordblur = event => {
        setPassword(event.target.value);
    }

    const handleconfirmpass = event => {
        setConfirmpass(event.target.value);
    }

    const handlecreateuser = event => {
        event.preventDefault();
        if (password !== confirmpass) {
            setError('password does not match')
            return;
        }
        if (password.length < 6) {
            setError('password should be 6 charecter');
            return;
        }

        createUserWithEmailAndPassword( email, password)
            .then(result => {
               const user = result.user;
               console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sing up</h1>
                <form onSubmit={handlecreateuser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleemailblur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlepasswordblur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleconfirmpass} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="Submit" value="Sing up" />
                </form>
                <p className='p'>
                    Already have an account?<Link className='form-link' to='/login'> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Singup;