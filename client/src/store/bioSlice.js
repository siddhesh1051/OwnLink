import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   bio: "",
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
        }
    })


    export const { add, remove } = bioSlice.actions
    export default bioSlice.reducer

           

