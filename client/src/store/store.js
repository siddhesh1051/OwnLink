import {configureStore} from "@reduxjs/toolkit"
import socialReducer from "./socialSlice"
import usernameReducer from './usernameSlice';
import nameReducer from './nameSlice';
import linkReducer from './linkSlice';
import bioReducer from './bioSlice';
import emailReducer from './emailSlice';
import picReducer from './picSlice'
import bgReducer from './bgSlice'
import ownlinkViewsreducer from './getviewsSlice'
import socialsViewsReducer from './getAllSocialsViews'
import linksViewsReducer from './getAllLinksViews'

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
  
  
  });

const store = configureStore({
    reducer: {
        social:socialReducer,
        username: usernameReducer,
        name: nameReducer,
        link: linkReducer,
        bio: bioReducer,
        email: emailReducer,
        pic: picReducer,
        bg: bgReducer,
        ownlinkViews: ownlinkViewsreducer,
        socialsViews: socialsViewsReducer,
        linksViews: linksViewsReducer



    }
})
    


export default store
