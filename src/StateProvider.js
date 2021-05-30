//this file is use to add data when we click on add to cart or add to basket
import React, {createContext, useContext, useReducer} from 'react';

//prepare the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value = {useReducer(reducer,initialState)}>{children}</StateContext.Provider>
);

//pull information from data layer
export const useStateValue = () => useContext(StateContext);