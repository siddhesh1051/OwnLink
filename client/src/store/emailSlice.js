import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   
   email: "",
}

  export const getEmailFromUsername = createAsyncThunk(
    "ownlink/getEmailFromUsername",
    async (username) => {
      const {
        data: { email },
        
      } = await axios.get(process.env.REACT_APP_API +`/email/${username}`);
      console.log(email)
      return email;
    }
  );

const emailSlice = createSlice({
    name: 'email',
    initialState,
    
    
        extraReducers: (builder) => {
      
          
            builder.addCase(getEmailFromUsername.fulfilled, (state, action) => {
              state.email = action.payload;
            });
        }
    })


    export const { add, remove } = emailSlice.actions
    export default emailSlice.reducer

           

