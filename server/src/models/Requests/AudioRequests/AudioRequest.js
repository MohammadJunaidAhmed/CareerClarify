const mongoose = require('mongoose');

const audioRequestSchema = new mongoose.Schema({

});

audioRequestSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

audioRequestSchema.set('toJSON', {
    virtuals: true,
});

exports.AudioRequest = mongoose.model('AudioRequest', audioRequestSchema);
exports.auidoRequestSchema = audioRequestSchema;