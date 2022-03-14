import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth";
import cart from "./cart";

const store = configureStore({
    reducer: {
        auth: auth.reducer,
        cart: cart.reducer
    }
});

export default store;