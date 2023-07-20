import { createSlice } from "@reduxjs/toolkit";

const initalFormState = {
  formValid: false,
  nameValid: false,
  emailValid: false,
  phoneValid: false,
};
const formSlice = createSlice({
  name: "form",
  initialState: initalFormState,
  reducers: {
    setFormValid(state, action) {
      state.formValid = action.payload;
    },

    setNameValid(state, action) {
      state.nameValid = action.payload;
    },

    setEmailValid(state, action) {
      state.emailValid = action.payload;
    },
    setPhoneValid(state, action) {
      state.phoneValid = action.payload;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
