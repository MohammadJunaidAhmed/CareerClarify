const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({ //TODO: Shift from experience to service
    company: {
        type: String,
        required: true,
    },
    designation:{
        type: String,
        required: true,
    },
    stillWorking:{
        type: Boolean,
        required: true,
    },
    startDate:{ //  MM/YYYY
        type: String,
        required: true,
    },
    endDate:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        default: 0,
    },
    proof:{
        type: String,
        default: ''
    },
    profId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional'
    }
});

experienceSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

experienceSchema.set('toJSON', {
    virtuals: true,
});

exports.Experience = mongoose.model('Experience', experienceSchema);
exports.experienceSchema = experienceSchema;