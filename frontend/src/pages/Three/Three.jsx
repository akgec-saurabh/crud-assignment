import React from "react";
import classes from "./Three.module.css";
const Three = ({ user }) => {
  return (
    <div className={classes.container}>
      <h1>Page Three</h1>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>(123) 456-7890</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Three;
