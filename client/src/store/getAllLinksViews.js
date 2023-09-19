import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',


});

const initialState = {
   linksViews: [],
   status: STATUSES.IDLE,
}

export const getAllLinksViews = createAsyncThunk(
    "ownlink/getAllLinksViews",
    
    async (username) => {
        const {data} = await axios.get(process.env.REACT_APP_API +`/getAllLinksViews/${username}`);
        console.log(data)
        return data;
      }
    
  );

const linksViewsSlice = createSlice({
    name: 'linksViews',
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
      
            builder.addCase(getAllLinksViews.fulfilled, (state, action) => {
              state.linksViews = action.payload;
              state.status = STATUSES.IDLE;
            });
           
            builder.addCase(getAllLinksViews.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(getAllLinksViews.pending, (state, action) => {
              state.status = STATUSES.LOADING;
            }
            );

          


        }
    })


    export const { add, remove } = linksViewsSlice.actions
    export default linksViewsSlice.reducer

           

