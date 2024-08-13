import { configureStore } from "@reduxjs/toolkit"
 import cartSliceReducer from './cartSlice'

const appStore= configureStore({
    reducer:{
        cart: cartSliceReducer,
        // user: userSliceReducer,
    }
})

export default appStore;
