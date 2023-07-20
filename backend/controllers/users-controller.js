const { validationResult } = require("express-validator");

const User = require("../models/user-model");
const httpError = require("../models/http-error");

// for getting all users
const getAllUsers = async (req, res, next) => {
  let allUsers;
  try {
    allUsers = await User.find({}).exec();
  } catch (error) {
    return next(httpError("Some error occured while finding the Users", 500));
  }

  if (allUsers.length === 0) {
    return next(httpError("Could not find any Users", 404));
  }

  // if user could be found and user array not zero we will now return the users

  res.status(200).json({
    message: "List of all Users",
    users: allUsers.map((user) => user.toObject({ getters: true })),
  });
};

// for creating new users
const createNewUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(httpError("Not valid Input", 500));
  }

  const { name, email, phone } = req.body;

  const createdUser = new User({
    name,
    email,
    phone,
  });

  try {
    await createdUser.save();
  } catch (error) {
    return next(httpError(error.message, 500));
  }

  res.status(201).json({
    message: "User Created",
    createdUser: createdUser.toObject({ getters: true }),
  });
};

// for getting userId
const getUserById = async (req, res, next) => {
  const userId = req.params.uid;

  let existingUser;

  try {
    existingUser = await User.findById(userId).exec();
  } catch (error) {
    return next(httpError("Error occured while finding the User", 500));
  }
  if (!existingUser) {
    return next(httpError("Could not find the User by UserId", 404));
  }

  // If user exist and the user could be found

  res.status(200).json({
    message: "User Found",
    existingUser: existingUser.toObject({ getters: true }),
  });
};

// for updating User
const updateUserById = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(req.body);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(httpError("Not valid Input", 500));
  }
  const { name } = req.body;

  const userId = req.params.uid;
  console.log(userId);

  let existingUser;

  try {
    existingUser = await User.findById(userId).exec();
  } catch (error) {
    return next(httpError("Error occured while finding the User", 500));
  }
  if (!existingUser) {
    return next(httpError("Could not find the User by UserId", 404));
  }

  existingUser.name = name;

  try {
    await existingUser.save();
  } catch (error) {
    return next(httpError("Error while saving updated User", 500));
  }

  res.status(201).json({
    message: "User Updated",
    existingUser: existingUser.toObject({ getters: true }),
  });
};

// for deleting user by userId
const deleteUserById = async (req, res, next) => {
  const userId = req.params.uid;

  try {
    await User.findOneAndRemove({ _id: userId });
  } catch (error) {
    return next(httpError("Unable to delete User", 500));
  }

  res.status(200).json({ message: "User Deleted" });
};

// exporting all the router
exports.getAllUsers = getAllUsers;
exports.createNewUser = createNewUser;
exports.getUserById = getUserById;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;
