import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',


});


const initialState = {
   bio: "",
  status: STATUSES.IDLE,
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
      // console.log(bio)
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
              state.status = STATUSES.IDLE;
            });
            builder.addCase(getBioFromUsername.fulfilled, (state, action) => {
              state.bio = action.payload;
              state.status = STATUSES.IDLE;
            });
            builder.addCase(getBio.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(getBioFromUsername.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(getBio.pending, (state, action) => {
              state.status = STATUSES.LOADING;
            }
            );
            builder.addCase(getBioFromUsername.pending, (state, action) => {
              state.status = STATUSES.LOADING;
            }
            );
        }
    })


    export const { add, remove } = bioSlice.actions
    export default bioSlice.reducer

           

