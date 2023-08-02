import React from 'react';

const Card = (props) => {

    const {cart} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    // let grandtotal = shipping + total + tax;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        shipping = shipping + product.shipping;
        total = total + product.price * product.quantity;
       
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandtotal = total + shipping + tax;

    return (
        <div>
            <div className='card-header'>
                        <h3>Order Summary</h3>
                    </div>
                    <div className='costing-info'>
                        <p>Selected Items: {quantity}</p>
                        <p>Total Shipping Charge: ${shipping}</p>
                        <p>Total Price: ${total}</p>
                        <p>Tax: ${tax}</p>
                    </div>
                    <div className='grand-total'>
                        <p>Grand Total: $ {grandtotal.toFixed(2)}</p>
                    </div>
                    {props.children}
        </div>
    );
};

export default Card;