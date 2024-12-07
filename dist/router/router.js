"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sellerController_1 = require("../controller/sellerController");
const router = express_1.Router;
router.route("/create-seller").post(sellerController_1.createSeller);
router.route("/create-dispatch").get(sellerController_1.createDispatch);
