import React from 'react';
import './Rewiew.css'
import useProducts from '../../Hooks/useProduct';
import useCard from '../../Hooks/useCard';
import Card from '../Card/Card';
import Reviewitem from '../ReviewItem/Reviewitem';
import './Rewiew.css'
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Review = () => {
    const [products, setProducts] = useProducts();
    const [card, setCard] = useCard(products);

    const handelremoveproduct = product => {
        const rest = card.filter(pd => pd.id !== product.id);
        setCard(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    card.map(product => <Reviewitem
                    key={product.id}
                    product ={product}
                    handelremoveproduct = {handelremoveproduct}
                    ></Reviewitem>)
                }
            </div>
            <div className="card-container">
                <Card cart ={card}>
                <div className='btns'>
                        <div>
                            <button className='clear-cart'>Clear Cart </button>
                        </div>
                        <div>
                            <Link to="/shipment"><button className='review'>Proceed Checkout</button></Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Review;