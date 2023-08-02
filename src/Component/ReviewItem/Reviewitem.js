import React from 'react';
import './Reviewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Reviewitem = (props) => {
    const {product, handelremoveproduct} = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-detail-container">
                <div className="review-item-detail">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price : <span className='orange-color'> ${price}</span></p>
                    <p><small>Shipping : ${shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handelremoveproduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviewitem;