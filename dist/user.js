"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
const uri = 'mongodb://heroku_0m7dhsj9:ktqjg1fn9qc5c1nadn877tovkq@ds023500.mlab.com:23500/heroku_0m7dhsj9';
mongoose.connect(uri, (err) => {
    if (err) {
        return console.error(err.message);
    }
    return console.log('Successfully connected to mongo DB');
});
exports.userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true,
        emailAdd: { type: String, required: true } }
});
const User = mongoose.model('User', exports.userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map