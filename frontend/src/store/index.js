import { createSlice, configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-slice";

const initialUsersState = {
  users: [],
  selectedUser: null,
  isEditMode: false,
  isViewMode: false,
  isAddMode: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUsersState,
  reducers: {
    replaceUsers(state, action) {
      // console.log(state.users);
      state.users = action.payload;
    },

    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },

    clearSelectedUser(state) {
      state.selectedUser = null;
    },

    setEditMode(state, action) {
      state.isEditMode = action.payload;
    },

    setViewMode(state, action) {
      state.isViewMode = action.payload;
    },

    setAddMode(state, action) {
      state.isAddMode = action.payload;
    },

    setUpdatedUser(state, action) {
      state.updatedUser = action.payload;
    },

    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
      console.log(state.users);
    },
  },
});

export const store = configureStore({
  reducer: { users: userSlice.reducer, form: formSlice.reducer },
});

export const userActions = userSlice.actions;

export default store;
