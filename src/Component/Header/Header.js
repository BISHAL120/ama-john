import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const handlesingout = () => {
        signOut(auth);
    }

    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className='ancor'>
                <Link to="/shop" className='link'>Shop</Link>
                <Link to="/review" className='link'>Order Review</Link>
                <Link to="/inventory" className='link'>Manage  Inventory</Link>
                <Link to="/singup" className='link'>Sing Up</Link>
               { 
               user ?
                <button onClick={handlesingout} style={{color: 'black'}} className='link'>Sing Out</button>
                :
                <Link to="/login" className='link'>Login</Link>
               }
                
            </div>
        </nav>
    );
};

export default Header;