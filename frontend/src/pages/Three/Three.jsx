import React from "react";
import classes from "./Three.module.css";
import { useSelector } from "react-redux";
const Three = () => {
  const selectedUser = useSelector((state) => state.users.selectedUser);

  return (
    <div className={classes.container}>
      <h1>Page Three(View)</h1>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedUser.id}</td>
            <td>{selectedUser.name}</td>
            <td>{selectedUser.email}</td>
            <td>{selectedUser.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Three;
