import { userActions } from "./index";

export const usersFetchAction = () => {
  return async (dispatch) => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/api/users/");
      if (!response.ok) {
        throw new Error("Could Not Fetch User List");
      }

      const responseData = await response.json();
      // console.log(responseData.users);

      dispatch(userActions.replaceUsers(responseData.users));
    };

    try {
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };
};

export const userFetchById = (userId) => {
  return async (dispatch) => {
    const sendReq = async () => {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`);
      if (!response.ok) {
        throw new Error("Could Not Create User");
      }

      const responseData = await response.json();

      dispatch(userActions.setSelectedUser(responseData.existingUser));

      //   dispatch(userActions.replaceUsers(responseData.users));
    };

    try {
      sendReq();
    } catch (error) {
      console.log(error);
    }
  };
};

export const userPostAction = (user) => {
  return async (dispatch) => {
    const sendReq = async () => {
      const response = await fetch("http://localhost:5000/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Could Not Create User");
      }

      const responseData = await response.json();
      console.log(responseData.users);

      dispatch(userActions.setAddMode(false));
    };

    try {
      sendReq();
    } catch (error) {
      console.log(error);
    }
  };
};

export const userPatchAction = (user) => {
  return async (dispatch) => {
    const sendReq = async () => {
      const response = await fetch(
        `http://localhost:5000/api/users/${user.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        throw new Error("Could Not Create User");
      }

      const responseData = await response.json();

      dispatch(userActions.clearSelectedUser());
      dispatch(userActions.setEditMode(false));
    };

    try {
      sendReq();
    } catch (error) {
      console.log(error);
    }
  };
};

export const userDeleteAction = (userId) => {
  return async (dispatch) => {
    const sendReq = async () => {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Could Not Create User");
      }

      const responseData = await response.json();

      dispatch(userActions.deleteUser(userId));
    };

    try {
      sendReq();
    } catch (error) {
      console.log(error);
    }
  };
};
