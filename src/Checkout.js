import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user },dispatch]=useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg' alt=''/>
            <div>
                {/* below line used to show the name or username of user in checkout page after sign , eg hello user */}
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {/* below line code is used to display items or products in left side of checkout page */}
                {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
