import { createSlice } from '@reduxjs/toolkit'

const initialState = []

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
        }
    })


    export const { add, remove } = socialSlice.actions
    export default socialSlice.reducer

           

