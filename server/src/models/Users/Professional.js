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
    phone: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        default: ''
    },
    apartment: {
        type: String,
        default: ''
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
    Field:{
        type: String,
        default: 'NA',
        enum: ['Software', 'Electrical', 'Mechanical', 'Electronics', 'Government', 'Musician', 'Businessman', 'Manager', 'Others']
    }
    ,
    currentCompany: {
        type: String,
        default: 'NA'
    },
    experiences: {
        type: String, // TODO: MAKE IT TO TYPE EXEPERIENCE[]
    },
    bankAccount: {
        type: String
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