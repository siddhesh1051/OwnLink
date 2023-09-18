import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',


});

const initialState = {
   ownlinkViews: 0,
   status: STATUSES.IDLE,
}

export const getViewsInformation = createAsyncThunk(
    "ownlink/getownlinkviews",
    
    async (username) => {
        const {
          data: { ownlinkViews },
          
        } = await axios.get(process.env.REACT_APP_API +`/getviewsinformation/${username}`);
        // console.log(name)
        return ownlinkViews;
      }
    
  );

const ownlinkViewsSlice = createSlice({
    name: 'ownlinkViews',
    initialState,
    reducers: { 
        add(state, action) {
            state.push(action.payload);

        },
        remove(state, action) {
            state = state.filter((item) => item.id !== action.payload)
        },
        },
    
        extraReducers: (builder) => {
      
            builder.addCase(getViewsInformation.fulfilled, (state, action) => {
              state.ownlinkViews = action.payload;
              state.status = STATUSES.IDLE;
            });
           
            builder.addCase(getViewsInformation.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(getViewsInformation.pending, (state, action) => {
              state.status = STATUSES.LOADING;
            }
            );

          


        }
    })


    export const { add, remove } = ownlinkViewsSlice.actions
    export default ownlinkViewsSlice.reducer

           

