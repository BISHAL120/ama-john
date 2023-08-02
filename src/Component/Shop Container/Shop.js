import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import { Link, Outlet } from 'react-router-dom';
import useProduct from '../../Hooks/useProduct';

const Shop = () => {
    const [products, setProduct] = useProduct();
    const [card, setCard] = useState([]);



    useEffect(()=>{
        const shoppingcard = getShoppingCart();
        const savedcard = [];
        for(const id in shoppingcard){
            // console.log(id);
            const addedproduct = products.find(product => product.id === id);
            if(addedproduct){
                const quantity = shoppingcard[id];
                addedproduct.quantity = quantity;
                savedcard.push(addedproduct);
                // console.log(addedproduct);

            }
        }
        setCard(savedcard);

    },[products])

    const handlecard = (selectedproduct) => {
        // console.log(product);
        let newcard = [];
        const exists = card.find(product => product.id === selectedproduct.id);
        if(!exists){
            selectedproduct.quantity = 1;
            newcard = [...card, selectedproduct];
        }
        else{
            const rest = card.filter(product => product.id !== selectedproduct.id);
            exists.quantity = exists.quantity + 1;
            newcard = [...rest, exists];
        }

        setCard(newcard);
        addToDb(selectedproduct.id);

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
                    <Card cart = {card}>
                    <div className='btns'>
                        <div>
                            <button className='clear-cart'>Clear Cart </button>
                        </div>
                        <div>
                            <Link to="/review"><button className='review'>Review Order</button></Link>
                        </div>
                    </div>
                    </Card>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;