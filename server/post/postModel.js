const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    username: String,
    comment_text: String,
    createdAt: Date.now,
    sub_comment: [
        {
            username: String,
            comment_text: String
        }
    ]
})

const PostSchema = new Schema({
    post_title: String,
    post_category: [Schema.Types.ObjectId],
    user_detail: {
        username: String,
        first_name: String,
        middle_name: String,
        last_name: String
    },
    modified_at: Date,
    followers: [Schema.Types.ObjectId],
    comment: CommentSchema
})

const PostModel = mongoose.model('postmodel', PostSchema)

module.exports = PostModel;