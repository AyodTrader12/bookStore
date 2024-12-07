import { Router } from "express";
import { createDispatch, createSeller } from "../controller/sellerController";

const router: any = Router;

router.route("/create-seller").post(createSeller);
router.route("/create-dispatch").get(createDispatch);
