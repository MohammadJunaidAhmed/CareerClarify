const mongoose = require('mongoose');

const audioRequestSchema = new mongoose.Schema({
    audioData: {
        type: Buffer,
        required: true,
    },
    clientId: { //TODO: REF TO CLIENT
        type: String,
        // required: true,
    },
    professionalId: { //TODO: REF TO PROFESSIONAL
        type: String,
        // required: true,
    },
    status:{
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Completed'],
    },
    response:{ //TODO: REF IT TO RESPONSE TABLE;
        type: String,
        default: ''
    },
    sentDate: {
        type: Date,
        default: Date.now,
    },
});

audioRequestSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

audioRequestSchema.set('toJSON', {
    virtuals: true,
});

exports.AudioRequest = mongoose.model('AudioRequest', audioRequestSchema);
exports.auidoRequestSchema = audioRequestSchema;