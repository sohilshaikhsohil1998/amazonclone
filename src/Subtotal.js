import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useHistory } from 'react-router-dom';

function Subtotal() {

    const history = useHistory();
    //this below line is used for basket?.length logic
    const [{basket}, dispatch]=useStateValue();
    return (
        <div className='subtotal'>
           <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket?.length} items) : 
                        {/* above line is used to increase item number when click on add to cart  */}
                        {/* below line show increse and decrese of price total  */}
                          <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />
                        This order container gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
           /> 
           <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
