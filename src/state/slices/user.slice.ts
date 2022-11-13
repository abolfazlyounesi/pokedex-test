import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  username: string;
  stared: string[];
};

/**
 * with the help of EntityAdapter, we will have a well typed data and a set of CRUD functions
 * of redux. so there is no need to define more reducers.
 * in this case data type of EntityAdapter is like: 
 * {ids: [list-of-usernames], entities: {username: string, stared:[list-of-saved-items]}}
 */

const usersAdapter = createEntityAdapter<UserState>({
  selectId: (i) => i.username
});

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    currentUser: ""
  }),
  reducers: {
    addOne: usersAdapter.addOne,
    updateOne: usersAdapter.updateOne,
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    }
  }
});

const { actions: UserActions, reducer: UsersReducer } = usersSlice;

export { UserActions, UsersReducer };

export const { setCurrentUser, addOne: addOneUser, updateOne } = usersSlice.actions;

export default usersSlice.reducer;
