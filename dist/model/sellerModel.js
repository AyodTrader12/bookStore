"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sellerModel = new mongoose_1.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    plarFormID: {
        type: String,
    },
    username: {
        type: String,
    },
    storeName: {
        type: String,
    },
});
exports.default = (0, mongoose_1.model)("seller", sellerModel);
