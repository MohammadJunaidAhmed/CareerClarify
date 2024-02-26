const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
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
    field:{
        type: String,
        required: true,
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
    currentCompany:{
        type: String,
        default: 'Currently Not-Working'
    },
    experiences:{
        type: String,
        default: ''
    },
    bankDetails: {
        type: String,
        defualt: ''
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
    totalRatings:{
        type: Number,
        default: 0,
    },
    avgRating:{ // avg = ((avg*total)+curr)/(total+1);
        type: Number,
        default: 0,
    },
    status:{
        type: String,
        enum: ['Active', 'Inactice'],
        default: 'Active'
    }
});

professionalSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

professionalSchema.set('toJSON', {
    virtuals: true,
});

exports.Professional = mongoose.model('Professional', professionalSchema);
exports.professionalSchema = professionalSchema;