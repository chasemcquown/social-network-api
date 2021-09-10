const router = require('express').Router();

// here we are destrcturing the user object and importing its methods
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// TODO: add methods to add and remove friends in user controller. Also, add routes to get and delete friends from user's friends array
module.exports = router;