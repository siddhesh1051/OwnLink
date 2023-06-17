import {configureStore} from "@reduxjs/toolkit"
import socialReducer from "./socialSlice"
import usernameReducer from './usernameSlice';
import nameReducer from './nameSlice';
import linkReducer from './linkSlice';
import bioReducer from './bioSlice';
import emailReducer from './emailSlice';



const store = configureStore({
    reducer: {
        social:socialReducer,
        username: usernameReducer,
        name: nameReducer,
        link: linkReducer,
        bio: bioReducer,
        email: emailReducer,



    }
})
    


export default store
