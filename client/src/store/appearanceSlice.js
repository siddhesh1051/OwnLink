import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./store";

const initialState = {
  appearance: {
    font: "Inter",
    buttonShape: "rounded"
  },
  status: STATUSES.IDLE,
};

export const getAppearance = createAsyncThunk(
  "appearance/get",
  async (email) => {
    const response = await axios.get(
      process.env.REACT_APP_API + `/appearance/${email}`
    );
    return response.data;
  }
);

export const getAppearanceFromUsername = createAsyncThunk(
  "appearance/getFromUsername",
  async (username) => {
    const response = await axios.get(
      process.env.REACT_APP_API + `/appearancefromusername/${username}`
    );
    return response.data;
  }
);

export const setAppearance = createAsyncThunk(
  "appearance/set",
  async ({ email, appearance }) => {
    const response = await axios.post(
      process.env.REACT_APP_API + `/addappearance`,
      {
        email,
        appearance,
      }
    );
    return { ...response.data, appearance };
  }
);

const appearanceSlice = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    setAppearanceLocal: (state, action) => {
      state.appearance = { ...state.appearance, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAppearance.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getAppearance.fulfilled, (state, action) => {
        state.appearance = action.payload.appearance || {
          font: "Inter",
          buttonShape: "rounded"
        };
        state.status = STATUSES.IDLE;
      })
      .addCase(getAppearance.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(getAppearanceFromUsername.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getAppearanceFromUsername.fulfilled, (state, action) => {
        state.appearance = action.payload.appearance || {
          font: "Inter",
          buttonShape: "rounded"
        };
        state.status = STATUSES.IDLE;
      })
      .addCase(getAppearanceFromUsername.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(setAppearance.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(setAppearance.fulfilled, (state, action) => {
        state.appearance = { ...state.appearance, ...action.payload.appearance };
        state.status = STATUSES.IDLE;
      })
      .addCase(setAppearance.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setAppearanceLocal } = appearanceSlice.actions;
export default appearanceSlice.reducer;