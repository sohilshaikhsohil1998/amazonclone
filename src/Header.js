import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
//this below link code is used to redirect home page by clickng amazon logo
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    //below line is used for basket?.length logic
    const [{basket, user}, dispatch]=useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut(); 
        }
    }

    return (
        <div className='header'>
            <Link to='/'>           
            <img 
                className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>
 
            <div className='header__search'>
                <input
                    className='header__searchInput' type='text' />
                <SearchIcon
                    className='header__searchIcon'/>
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Primes</span>
                </div>
                <Link to='/checkout'>
                <div className='header__optionBasket'>  
                    <ShoppingBasketIcon /> 
                    <span className='header__optionLineTwo
                     header__basketCount'>{basket?.length}</span>
                     {/* above line is to update cart logo when we click on add to cart */}
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Header
