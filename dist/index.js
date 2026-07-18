"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://localhost:27017/brain");
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_password = "!123123";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", async (req, res) => {
    const Username = req.body.Username;
    const password = req.body.password;
    try {
        await db_1.UserModel.create({
            Username: Username,
            password: password
        });
        res.json({
            message: "User signdup"
        });
    }
    catch (e) {
        res.status(411).json({
            message: "user alrady exixt"
        });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const Username = req.body.Username;
    const password = req.body.password;
    const existingUser = await db_1.UserModel.findOne({
        Username,
        password
    });
    if (existingUser) {
        const token = jsonwebtoken_1.default.sign({
            id: existingUser._id
        }, jwt_password);
        res.json({
            token
        });
    }
    else {
        res.status(403).json({
            message: "incorrect credantials"
        });
    }
});
app.post("/api/v1/content", (req, res) => {
    res.send("hi");
});
app.get("/api/v1/content", (req, res) => {
    res.send("hi");
});
app.listen(4000, () => {
    console.log("backend is running ");
});
//# sourceMappingURL=index.js.map