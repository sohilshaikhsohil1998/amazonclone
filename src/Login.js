import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase'


function Login() {
    const history = useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const signIn = e =>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth=>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                className='login__logo'
                src='https://static.toiimg.com/photo/59847732.cms' 
                />
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sing in</button>
                </form>
                <p>
                    By sign in you agree to amazon conditions  of use & sale. please see our privacy notice, our cookies  notice  and our interest based ads.
                    Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
