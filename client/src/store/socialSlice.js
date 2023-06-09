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

export const setSocials = createAsyncThunk(
    "ownlink/setSocials",
    async (email,link,type) => {
      try {
        await axios.post(process.env.REACT_APP_API +"/addsocial", {
          email,
          link,
          type
        });
      toast.success('Profile Updated Successfully', {
          position: "bottom-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          
        
      } catch (error) {
          toast.error(error, {
              position: "bottom-center",
              autoClose: 2500})
          }
      
   
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
            builder.addCase(setSocials.fulfilled, (state, action) => {
              state.socials = action.payload;
            });
        }
    })


    export const { add, remove } = socialSlice.actions
    export default socialSlice.reducer

           

