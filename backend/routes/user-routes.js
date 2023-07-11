const express = require("express");
const { check } = require("express-validator");
const {
  getAllUsers,
  createNewUser,
  getUserById,
  deleteUserById,
  updateUserById,
} = require("../controllers/users-controller");

const router = express.Router();

// for getting all the users
router.get("/users", getAllUsers);

// for creating new users
router.post(
  "/users",
  [
    check("phone").notEmpty().isLength({ min: 10, max: 10 }),
    check("name").notEmpty().isLength({ min: 5 }),
    check("email").isEmail(),
  ],
  createNewUser
);

// for getting user by userId
router.get("/users/:uid", getUserById);

// for updating user by userId
router.patch(
  "/users/:uid",
  [check("name").notEmpty().isLength({ min: 5 })],
  updateUserById
);

// for deleting user by userId
router.delete("/users/:uid", deleteUserById);

module.exports = router;
