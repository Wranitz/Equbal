const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hash: { type: String, required: true},
    first_name:{
        type: String,
        required: [true, 'This field is required']
    },
    middle_name:{
        type: String,
    },
    last_name :{
        type: String,
        required: [true, 'This field is required']
    },
    dob: {
        type: Date,
        required: [true, 'This field is required']
    },
    createdDate: { type: Date, default: Date.now },
    profile :{
        type: Schema.Types.ObjectId,
    }
})

UserSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('usermodel', UserSchema)
