import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   name: "",
}

export const getName = createAsyncThunk(
    "ownlink/getName",
    async (email) => {
      const {
        data: { name },
      } = await axios.get(process.env.REACT_APP_API +`/name/${email}`);
      return name;
    }
  );

const nameSlice = createSlice({
    name: 'name',
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
      
            builder.addCase(getName.fulfilled, (state, action) => {
              state.name = action.payload;
            });
        }
    })


    export const { add, remove } = nameSlice.actions
    export default nameSlice.reducer

           

