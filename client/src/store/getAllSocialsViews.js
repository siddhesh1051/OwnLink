import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',


});

const initialState = {
   socialsViews: [],
   status: STATUSES.IDLE,
}

export const getAllSocialsViews = createAsyncThunk(
    "ownlink/getAllSocialsViews",
    
    async (username) => {
        const {data} = await axios.get(process.env.REACT_APP_API +`/getAllSocialsViews/${username}`);
        // console.log(name)
        console.log(data)
        return data;
      }
    
  );

const socialsViewsSlice = createSlice({
    name: 'socialsViews',
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
      
            builder.addCase(getAllSocialsViews.fulfilled, (state, action) => {
              state.socialsViews = action.payload;
              state.status = STATUSES.IDLE;
            });
           
            builder.addCase(getAllSocialsViews.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(getAllSocialsViews.pending, (state, action) => {
              state.status = STATUSES.LOADING;
            }
            );

          


        }
    })


    export const { add, remove } = socialsViewsSlice.actions
    export default socialsViewsSlice.reducer

           

