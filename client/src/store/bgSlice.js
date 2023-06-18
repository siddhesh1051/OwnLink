import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   bg: "",
  //  bioUsername: "",
}

export const getBg = createAsyncThunk(
    "ownlink/getBg",
    async (email) => {
      const {
        data: { bg },
      } = await axios.get(process.env.REACT_APP_API +`/bg/${email}`);
      return bg;
    }
  );

export const getBgFromUsername = createAsyncThunk(
    "ownlink/getBgFromUsername",
    async (username) => {
      const {
        data: { bg },
        
      } = await axios.get(process.env.REACT_APP_API +`/bgfromusername/${username}`);
      // console.log(bio)
      return bg;
    }
  );

 

const bgSlice = createSlice({
    name: 'bg',
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
      
            builder.addCase(getBg.fulfilled, (state, action) => {
              state.bg = action.payload;
            });
            builder.addCase(getBgFromUsername.fulfilled, (state, action) => {
              state.bg = action.payload;
            });
        }
    })


    export const { add, remove } = bgSlice.actions
    export default bgSlice.reducer

           

