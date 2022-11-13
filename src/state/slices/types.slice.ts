import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITypes } from "../../dto";

type TypesState = {
  data: ITypes[];
  selected: string;
};

const initialState: TypesState = {
  data: [],
  selected: ""
};

const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    setTypes: (state, action: PayloadAction<ITypes[]>) => {
      state.data = action.payload;
    },
    setSelectedType: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    }
  }
});

const { actions: TypesActions, reducer: TypesReducer } = typesSlice;

export { TypesActions, TypesReducer };

export default TypesReducer;
