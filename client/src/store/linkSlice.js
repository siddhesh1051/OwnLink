import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
   links: [],
}

export const getLinks = createAsyncThunk(
    "ownlink/getLinks",
    async (email) => {
      const {
        data: { links },
      } = await axios.get(process.env.REACT_APP_API +`/links/${email}`);
      return links;
    }
  );

  export const getLinksFromUsername = createAsyncThunk(
    "ownlink/getLinksFromUsername",
    async (username) => {
      const {
        data: { links },
        
      } = await axios.get(process.env.REACT_APP_API +`/linksfromusername/${username}`);
      // console.log(links)
      return links;
    }
  );

  export const removeLink = createAsyncThunk(
    "ownlink/removeLinks",
    async ({ email,link }) => {
      const {
        data: { links },
      } = await axios.put(process.env.REACT_APP_API +"/removelink", {
        email,
        link,
      });
      return links;
    }
  ); 

const linkSlice = createSlice({
    name: 'link',
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
      
            builder.addCase(getLinks.fulfilled, (state, action) => {
              state.links = action.payload;
            });
            builder.addCase(getLinksFromUsername.fulfilled, (state, action) => {
              state.links = action.payload;
            });
            builder.addCase(removeLink.fulfilled, (state, action) => {
              state.links = action.payload;
            });
        }
    })


    export const { add, remove } = linkSlice.actions
    export default linkSlice.reducer

           

