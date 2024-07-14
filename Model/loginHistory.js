const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginHistorySchema = new Schema({
    loginTime: {type: Date, default: Date.now},
    browser: {type: String, required: true},
    os: {type: String, required: true},
    deviceType: {type: String, required: true},
    ipAddress: {type: String, required: true}
});

module.exports = mongoose.model('LoginHistory', loginHistorySchema);