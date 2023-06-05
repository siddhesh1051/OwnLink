import {configureStore} from "@reduxjs/toolkit"
import socialReducer from "./socialSlice"


const store = configureStore({
    reducer: {
        social:socialReducer,
    }
})
    


export default store
