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

// Set up POST and DELETE at /api/users/:userId/friends/:friendId
router
  .route('/:id/friends/:id')
  // below we are find a user and adding a friend to the user's friend array
  .post(updateUser)
  // below we are finding a user and removing a friend from the user's friend array
  .delete(deleteFriend);

module.exports = router;