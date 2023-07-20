import React, { useEffect } from "react";
import classes from "./One.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  userDeleteAction,
  userFetchById,
  usersFetchAction,
} from "../../store/user-actions";
import { userActions } from "../../store";

const One = () => {
  const onClickHandler = () => {
    dispatch(userActions.setAddMode(true));
  };

  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(usersFetchAction());
  }, [dispatch]);

  const onViewHandler = (userId) => {
    dispatch(userActions.setViewMode(true));
    dispatch(userFetchById(userId));
  };

  const onEditHandler = (userId) => {
    dispatch(userActions.setEditMode(true));
    dispatch(userFetchById(userId));
  };

  const onDeleteHandler = (userId) => {
    dispatch(userDeleteAction(userId));
  };

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
                    <button
                      onClick={() => onViewHandler(user.id)}
                      className={`${classes.viewBtn} globalBtn`}
                    >
                      View
                    </button>
                    <button
                      onClick={() => onEditHandler(user.id)}
                      className={`${classes.editBtn} globalBtn`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteHandler(user.id)}
                      className={`${classes.delBtn} globalBtn`}
                    >
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
