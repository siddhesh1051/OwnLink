import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',


});

const initialState = {
   username: "",
   status: STATUSES.IDLE,
}

export const getUsername = createAsyncThunk(
    "ownlink/getUsername",
    
    async (email) => {
      const {
        data: { username },
      } = await axios.get(process.env.REACT_APP_API +`/username/${email}`);
      return username;
    }
    
  );

const usernameSlice = createSlice({
    name: 'username',
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
      
            builder.addCase(getUsername.fulfilled, (state, action) => {
              state.username = action.payload;
              state.status = STATUSES.IDLE;
            });
           
            builder.addCase(getUsername.rejected, (state, action) => {
              state.status = STATUSES.ERROR;
            }
            );
            builder.addCase(getUsername.pending, (state, action) => {
              state.status = STATUSES.LOADING;
            }
            );

          


        }
    })


    export const { add, remove } = usernameSlice.actions
    export default usernameSlice.reducer

           

