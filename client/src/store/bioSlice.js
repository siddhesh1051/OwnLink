import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   bio: "",
  //  bioUsername: "",
}

export const getBio = createAsyncThunk(
    "ownlink/getBio",
    async (email) => {
      const {
        data: { bio },
      } = await axios.get(process.env.REACT_APP_API +`/bio/${email}`);
      return bio;
    }
  );

export const getBioFromUsername = createAsyncThunk(
    "ownlink/getBioFromUsername",
    async (username) => {
      const {
        data: { bio },
        
      } = await axios.get(process.env.REACT_APP_API +`/biofromusername/${username}`);
      console.log(bio)
      return bio;
    }
  );

 

const bioSlice = createSlice({
    name: 'bio',
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
      
            builder.addCase(getBio.fulfilled, (state, action) => {
              state.bio = action.payload;
            });
            builder.addCase(getBioFromUsername.fulfilled, (state, action) => {
              state.bio = action.payload;
            });
        }
    })


    export const { add, remove } = bioSlice.actions
    export default bioSlice.reducer

           

