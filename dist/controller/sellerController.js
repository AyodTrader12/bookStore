"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDispatch = exports.createSeller = void 0;
const sellerModel_1 = __importDefault(require("../model/sellerModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const createSeller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, userName, storeName } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const token = crypto_1.default.randomBytes(3).toString("hex");
        const user = yield sellerModel_1.default.create({
            email,
            password: hashed,
            userName,
            storeName,
            platFormID: token,
            status: "seller",
        });
        return res.status(201).json({
            message: "Seller created",
            data: user,
            status: 201,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating ",
        });
    }
});
exports.createSeller = createSeller;
const createDispatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const token = crypto_1.default.randomBytes(3).toString("hex");
        const user = yield sellerModel_1.default.findOne({
            email,
        });
        return res.status(201).json({
            message: "Seller created successfully",
            data: user,
            status: 201,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating ",
        });
    }
});
exports.createDispatch = createDispatch;
