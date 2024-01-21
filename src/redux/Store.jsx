import { configureStore } from "@reduxjs/toolkit";
import Users from './Users';

export const Store = configureStore({
    reducer:{
        users:Users
    }
});

Store.subscribe(() => {
    let store = Store.getState();
    console.log('store',store);
    console.log('subscribed to store');
});