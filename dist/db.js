"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareModel = exports.contentMOdel = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    Username: { type: String, unique: true },
    password: String
});
exports.UserModel = (0, mongoose_2.model)("User", UserSchema);
const contentSchema = new mongoose_1.Schema({
    title: String,
    type: String,
    link: String,
    tags: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "tags" }],
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true }
});
exports.contentMOdel = (0, mongoose_2.model)("content", contentSchema);
const shareSchema = new mongoose_1.Schema({
    hash: String,
    UserId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        unique: true
    }
});
exports.shareModel = (0, mongoose_2.model)("link", shareSchema);
//# sourceMappingURL=db.js.map