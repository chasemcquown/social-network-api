const { Schema, model, Types } = require('mongoose');

const FriendSchema = new Schema(
    {
      friendId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      username: {
        type: String,
        required: true
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
);

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [FriendSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
);

// virtual that will include friend count upon user(s) query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;