"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usermiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const usermiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) {
        return res.status(403).json({
            message: "no token"
        });
    }
    const token = header.split(" ")[1];
    console.log(token);
    const decoded = jsonwebtoken_1.default.verify(token, config_1.jwt_password);
    if (decoded) {
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "you are logged in"
        });
    }
};
exports.usermiddleware = usermiddleware;
//# sourceMappingURL=middleware.js.map