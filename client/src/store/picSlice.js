import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   pic: "",
}

export const getPic = createAsyncThunk(
    "ownlink/getPic",
    async (email) => {
      const {
        data: { pic },
      } = await axios.get(process.env.REACT_APP_API +`/profilepic/${email}`);
      console.log(pic);
      return pic;
    }
  );

export const getPicFromUsername = createAsyncThunk(
    "ownlink/getPicFromUsername",
    async (username) => {
      const {
        data: { pic },
        
      } = await axios.get(process.env.REACT_APP_API +`/profilepicfromusername/${username}`);
      // console.log(bio)
      return pic;
    }
  );

 

const picSlice = createSlice({
    name: 'pic',
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
      
            builder.addCase(getPic.fulfilled, (state, action) => {
              state.pic = action.payload;
            });
            builder.addCase(getPicFromUsername.fulfilled, (state, action) => {
              state.pic = action.payload;
            });
        }
    })


    export const { add, remove } = picSlice.actions
    export default picSlice.reducer

           

