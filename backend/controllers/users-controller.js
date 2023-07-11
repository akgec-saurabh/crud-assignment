const DUMMY_USER = [
  {
    id: "001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 555-123-4567",
  },
  {
    id: "002",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 555-987-6543",
  },
  {
    id: "003",
    name: "David Johnson",
    email: "david.johnson@example.com",
    phone: "+1 555-789-0123",
  },
  {
    id: "004",
    name: "Emily Brown",
    email: "emily.brown@example.com",
    phone: "+1 555-456-7890",
  },
  {
    id: "005",
    name: "Michael Davis",
    email: "michael.davis@example.com",
    phone: "+1 555-321-0987",
  },
];

// for getting all users
const getAllUsers = (req, res, next) => {
  res.send(DUMMY_USER);
};

// for creating new users
const createNewUser = (req, res, next) => {};

// for getting userId
const getUserById = (req, res, next) => {
  const userId = req.params.uid;
  res.send(userId);
};

// for updating User
const updateUserById = (req, res, next) => {
  const userId = req.params.uid;
  console.log(userId);
};

// for deleting user by userId
const deleteUserById = (req, res, next) => {
  const userId = req.params.uid;
  console.log(userId);
};

// exporting all the router
exports.getAllUsers = getAllUsers;
exports.createNewUser = createNewUser;
exports.getUserById = getUserById;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;
