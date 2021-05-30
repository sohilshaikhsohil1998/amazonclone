import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {
    const [{basket},dispatch]=useStateValue();

    const addToBasket =()=>{
        //dispatch item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

    }
    return (
        <div className='product'>
            <div className='product__info'>
                {/* here are words like title and price are taken from home.js in home.js file we have title and price etc.. */}
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* //below rating code help to build stars by sing p tag  */}
                    {Array(rating).fill().map((_, i)=>(
                         <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image}/>
            
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product   
