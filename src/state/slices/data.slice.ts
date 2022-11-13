import { createSlice } from "@reduxjs/toolkit";
import { IPokemonData } from "../../dto";

/**
 * defining slice for the Pokemon data in the app with a custom reducer
 */

const initialState: IPokemonData[] = [];

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => (state = action.payload)
  }
});

const { actions: DataActions, reducer: DataReducer } = dataSlice;

export { DataActions, DataReducer };

export default DataReducer;
