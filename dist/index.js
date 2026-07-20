"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
mongoose_1.default.connect("mongodb://localhost:27017/brain");
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
//import { Jwt_password } from "jsonwebtoken";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/api/v1/signup", async (req, res) => {
    const Username = req.body.Username;
    const password = req.body.password;
    console.log(Username, password);
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
        }, config_1.jwt_password);
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
app.post("/api/v1/content", middleware_1.usermiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    db_1.contentMOdel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId,
        tags: []
    });
    return res.json({
        message: "content added"
    });
});
app.get("/api/v1/content", middleware_1.usermiddleware, async (req, res) => {
    //@ts-ignore8  
    const userId = req.userId;
    const content = await db_1.contentMOdel.find({
        userId
    }).populate("userId", "Username");
    res.json({
        content
    });
});
app.listen(4000, () => {
    console.log("backend is running ");
});
//# sourceMappingURL=index.js.map