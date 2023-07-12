import React from "react";
import classes from "./One.module.css";
const One = () => {
  const onClickHandler = () => {};
  return (
    <div className={classes.container}>
      <button onClick={onClickHandler}>Add User</button>
      <div className={classes.userListWrapper}></div>
    </div>
  );
};

export default One;
