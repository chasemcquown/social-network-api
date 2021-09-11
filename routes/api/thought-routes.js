const router = require('express').Router();

const {
    getAllThought,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction,
    getThoughtById
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThought);


router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

// /api/thoughts/<userId>
// NOTE: this endpoint will allow a user to add a thought
router
    .route('/:userId')
    .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
// NOTE: this route will allow for deleting the thought itself, and removing its (the thought id) from the user's document
router
    .route('/:userId/:thoughtId')
    // we are using put below since we are updating a thought by adding a reaction to it 
    .get(getThoughtById)
    .put(addReaction)
    .delete(removeThought)

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
// NOTE: this route will allow us to delete a reaction. We include both the thought and reaction id since we need both in order to delete a reaction... in other words, we are saying "Go to this user, then look at this particular thought, then delete this one reaction."
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;