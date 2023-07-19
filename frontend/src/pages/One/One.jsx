import React, { useEffect } from "react";
import classes from "./One.module.css";
import { useDispatch, useSelector } from "react-redux";
import { usersFetchAction } from "../../store";

const One = () => {
  const onClickHandler = () => {};

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersFetchAction());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <h1>Page One</h1>
      <button
        className={`${classes.addBtn} globalBtn`}
        onClick={onClickHandler}
      >
        Add User
      </button>

      <table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className={classes.btnWrapper}>
                    <button className={`${classes.viewBtn} globalBtn`}>
                      View
                    </button>
                    <button className={`${classes.editBtn} globalBtn`}>
                      Edit
                    </button>
                    <button className={`${classes.delBtn} globalBtn`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default One;
