const router = require('express').Router();

// here we are destrcturing the user object and importing its methods
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    removeFriend,
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


// /api/users/friends/:userId
router
 .route('/friends/:userId')
 .put(addFriend)


// /api/users/friends/:userId/:friendId
router
 .route('/:userId/:friendId')
 .delete(removeFriend)


module.exports = router;