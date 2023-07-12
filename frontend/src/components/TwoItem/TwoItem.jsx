import React from "react";
import classes from "./TwoItem.module.css";
const TwoItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.id}>id</div>
      <div className={classes.name}>Name</div>
    </div>
  );
};

export default TwoItem;
