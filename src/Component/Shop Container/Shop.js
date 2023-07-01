import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [card, setCard] = useState([]);
    const [charge, setCharge] = useState(0);
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const handlecard = (product) => {
        // console.log(product);
        const newcard = [...card, product];
        setCard(newcard);

        addToDb(product.id);

        const chargeprice = charge + product.shipping;
        console.log(product.shipping);
        setCharge(chargeprice);

        const newprice = price + product.price;
        setPrice(newprice);
        // console.log(newprice);

        const taxs = newprice * 0.1;
        // console.log(taxs);
        setTax(taxs);

        setTotal(chargeprice + newprice + taxs);

    }

    const clearcard = () => {
        setCard(0);
        setCharge(0);
        setPrice(0);
        setTax(0);
        setTotal(0);
    }



    return (
        <div>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Products handlecard={handlecard} key={product.id} product={product}></Products>)
                    }
                </div>
                <div className='card-container'>
                    <div className='card-header'>
                        <h3>Order Summary</h3>
                    </div>
                    <div className='costing-info'>
                        <p>Selected Items: {card.length}</p>
                        <p>Total Shipping Charge: ${charge}</p>
                        <p>Total Price: ${price}</p>
                        <p>Tax: ${tax.toFixed(2)}</p>
                    </div>
                    <div className='grand-total'>
                        <p>Grand Total: $ {total}</p>
                    </div>
                    <div className='btns'>
                        <div>
                            <button onClick={clearcard} className='clear-cart'>Clear Cart </button>
                        </div>
                        <div>
                            <button className='review'>Review Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;