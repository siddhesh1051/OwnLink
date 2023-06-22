import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',


});

const initialState = {
   socials: [],
    status: STATUSES.IDLE,
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

  export const getSocialsFromUsername = createAsyncThunk(
    "ownlink/getSocialsFromUsername",
    async (username) => {
      const {
        data: { socials },
        
      } = await axios.get(process.env.REACT_APP_API +`/socialsfromusername/${username}`);
      // console.log(socials)
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
              state.status = STATUSES.IDLE;
            });
            builder.addCase(getSocialsFromUsername.fulfilled, (state, action) => {
              state.socials = action.payload;
              state.status = STATUSES.IDLE;
            });
            builder.addCase(removeSocial.fulfilled, (state, action) => {
              state.socials = action.payload;
              state.status = STATUSES.IDLE;
            });
            builder.addCase(getSocials.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(getSocialsFromUsername.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(removeSocial.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(getSocials.pending, (state, action) => {
              state.status = STATUSES.LOADING;
            }
            );
            builder.addCase(getSocialsFromUsername.pending, (state, action) => {

              state.status = STATUSES.LOADING;
            }
            );
            builder.addCase(removeSocial.pending, (state, action) => {

              state.status = STATUSES.LOADING;
            }
            );
            
          
        }
    })


    export const { add, remove } = socialSlice.actions
    export default socialSlice.reducer

           

