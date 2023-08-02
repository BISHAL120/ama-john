import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handlenameblur = event => {
        setName(event.target.value);
    }


    const handleaddressdblur = event => {
        setAddress(event.target.value);
    }

    const handlephonenumber = event => {
        setPhone(event.target.value);
    }

    const handlecreateuser = event => {
        event.preventDefault();
       
}


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handlecreateuser}>
                    <div className="input-group">
                        <label htmlFor="email">Name</label>
                        <input onBlur={handlenameblur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="ddress">Adress</label>
                        <input onBlur={handleaddressdblur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlephonenumber} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="Submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;