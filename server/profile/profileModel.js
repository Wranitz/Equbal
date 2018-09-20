const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    post_username : String,
    created: Date,
    posts: [Schema.Types.ObjectId],
    user_following: {
        followers: [Schema.Types.ObjectId],
        followings: [Schema.Types.ObjectId]
    },
    followed_posts: [Schema.Types.ObjectId]
})

const ProfileModel = mongoose.model('profilemodel', ProfileSchema)

module.exports = ProfileModel;