//this is main js file from here you render all other js files like header, product, checout etc.. all you have to do just import all js files like given below

import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";  
import Checkout from './Checkout'; 
import Login from './Login';
//below line used to import firebase , firebase is used like data base cloude
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
//stripe is used for payment methods
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders'

const promise = loadStripe('pk_test_51HuKt6BIe54tKOoykjWo2NIYG8BGTrDtUs5Z7w83oQrj9FGCyXo1602QIgho0OhKsZtqoNtGvLhpJpIx0QyxXC2700dVlEfbmO'); 

function App() {
  const [{}, dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if(authUser){
        //the user just loggedin or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser   
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //router is used to change the path of one page to another page . eg - when i click checkout page then i go to chechkout page
    <Router>
    <div className="App">
      <Switch>
      <Route path="/orders">
      <Header /> 
      <Orders />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
      <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/payment">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      </Route>
      <Route path="/">
      <Header />
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
