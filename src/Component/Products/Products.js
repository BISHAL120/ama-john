import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Products = (props) => {
    const {img, name, price, seller, ratings,} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Prce : ${price}</p>
            <div className='seller-rating'>
            <p><small>Seller : {seller}</small></p>
            <p><small>Ratings : {ratings}</small></p>
            </div>
            </div>
            <button onClick={() => props.handlecard(props.product)} className='btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Products;