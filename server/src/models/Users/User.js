const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    photo:{
        type: String,
        default: '',
    },
    phone: {
        type: String,
        required: true,
    },
    desc:{
        type: String,
        default: '',
    },
    street: {
        type: String,
        default: '',
    },
    apartment: {
        type: String,
        default: '',
    },
    zip :{
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    audRequests:{
        type: String,
        default: ''
    },
    vidRequests:{
        type: String,
        default: ''
    },
    f2fRequests:{
        type: String,
        default: ''
    },
    status:{
        type: String,
        enum: ['Active', 'Inactice'],
        default: 'Active'
    }
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;