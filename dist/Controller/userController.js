"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUsers = exports.addUser = void 0;
const user_1 = __importDefault(require("./..//user"));
//add a new user
exports.addUser = (req, res) => {
    let user = new user_1.default(req.body);
    user.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.allUsers = (req, res) => {
    let users = user_1.default.find((err, users) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(users);
        }
    });
};
//# sourceMappingURL=userController.js.map