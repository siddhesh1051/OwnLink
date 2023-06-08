import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   links: [],
}

export const getLinks = createAsyncThunk(
    "ownlink/getLinks",
    async (email) => {
      const {
        data: { links },
      } = await axios.get(process.env.REACT_APP_API +`/links/${email}`);
      return links;
    }
  );

const linkSlice = createSlice({
    name: 'link',
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
      
            builder.addCase(getLinks.fulfilled, (state, action) => {
              state.links = action.payload;
            });
        }
    })


    export const { add, remove } = linkSlice.actions
    export default linkSlice.reducer

           

