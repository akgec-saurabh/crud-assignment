const express = require("express");
const {
  getAllUsers,
  createNewUser,
  getUserById,
} = require("../controllers/users-controller");

const router = express.Router();

// for getting all the users
router.get("/users", getAllUsers);

// for creating new users
router.post("/users", createNewUser);

// for getting user by userId
router.get("/users/:uid", getUserById);

// for updating user by userId
router.patch("/users/:uid");

// for deleting user by userId
router.delete("/users/:uid");

module.exports = router;
