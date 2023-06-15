import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
   socials: [],
}

export const getSocials = createAsyncThunk(
    "ownlink/getSocials",
    async (email) => {
      const {
        data: { socials },
      } = await axios.get(process.env.REACT_APP_API +`/socials/${email}`);
      return socials;
    }
  );

  export const removeSocial = createAsyncThunk(
    "ownlink/removeSocials",
    async ({ email,type }) => {
      const {
        data: { socials },
      } = await axios.put(process.env.REACT_APP_API +"/removesocial", {
        email,
        type,
      });
      return socials;
    }
  ); 
      


    
    
    

const socialSlice = createSlice({
    name: 'social',
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
      
            builder.addCase(getSocials.fulfilled, (state, action) => {
              state.socials = action.payload;
            });
          
        }
    })


    export const { add, remove } = socialSlice.actions
    export default socialSlice.reducer

           

