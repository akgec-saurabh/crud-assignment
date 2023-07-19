import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialUsersState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUsersState,
  reducers: {
    replaceUsers(state, action) {
      console.log(state.users);
      state.users = action.payload;
    },
  },
});

export const usersFetchAction = () => {
  return async (dispatch) => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/api/users/");
      if (!response.ok) {
        throw new Error("Could Not Fetch User List");
      }

      const responseData = await response.json();
      console.log(responseData.users);

      dispatch(userActions.replaceUsers(responseData.users));
    };

    try {
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };
};

export const store = configureStore({ reducer: { users: userSlice.reducer } });

export const userActions = userSlice.actions;

export default store;
