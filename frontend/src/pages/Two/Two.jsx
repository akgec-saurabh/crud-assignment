import React, { useRef } from "react";
import classes from "./Two.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userPatchAction, userPostAction } from "../../store/user-actions";
import { formActions } from "../../store/form-slice";

const Two = () => {
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const isAddMode = useSelector((state) => state.users.isAddMode);
  const isEditMode = useSelector((state) => state.users.isEditMode);
  const { formValid, nameValid, emailValid, phoneValid } = useSelector(
    (state) => state.form
  );

  //Ref
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const tempUser = {
      ...selectedUser,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    console.log(tempUser);

    if (isEditMode) {
      dispatch(userPatchAction(tempUser));
    }

    if (isAddMode) {
      console.log("Add Mode");
      dispatch(userPostAction(tempUser));
    }
  };

  const onChangeHandler = (e) => {
    if (e.target.id === "name") {
      if (e.target.value.trim().length > 5) {
        dispatch(formActions.setNameValid(true));
      } else {
        dispatch(formActions.setNameValid(false));
      }
    }
    if (e.target.id === "email") {
      if (
        e.target.value.trim().length > 5 &&
        e.target.value.trim().includes("@")
      ) {
        dispatch(formActions.setEmailValid(true));
      } else {
        dispatch(formActions.setEmailValid(false));
      }
    }
    if (e.target.id === "phone") {
      if (e.target.value.trim().length === 10) {
        dispatch(formActions.setPhoneValid(true));
      } else {
        dispatch(formActions.setPhoneValid(false));
      }
    }
  };

  const onFocusHandler = () => {};

  return (
    <div className={classes.container}>
      <h1>Page Two (Update/Add)</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.input}>
          <label htmlFor="name">Name</label>

          <input
            className={nameValid ? `${classes.green}` : ""}
            ref={nameRef}
            onFocus={onFocusHandler}
            onChange={onChangeHandler}
            defaultValue={isAddMode ? "" : selectedUser.name}
            type="text"
            id="name"
          />
        </div>

        <div className={classes.input}>
          <label htmlFor="email">Email</label>
          <input
            className={emailValid ? `${classes.green}` : ""}
            ref={emailRef}
            onFocus={onFocusHandler}
            onChange={onChangeHandler}
            defaultValue={isAddMode ? "" : selectedUser.email}
            type="text"
            id="email"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="phone">Phone</label>
          <input
            ref={phoneRef}
            className={phoneValid ? `${classes.green}` : ""}
            onFocus={onFocusHandler}
            onChange={onChangeHandler}
            defaultValue={isAddMode ? "" : selectedUser.phone}
            type="text"
            id="phone"
          />
        </div>

        <button
          disabled={
            isEditMode ? false : !nameValid || !phoneValid || !emailValid
          }
          className="globalBtn hCenter"
        >
          {isAddMode ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Two;
