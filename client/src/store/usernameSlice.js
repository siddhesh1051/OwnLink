import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   username: "",
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
            });
        }
    })


    export const { add, remove } = usernameSlice.actions
    export default usernameSlice.reducer

           

