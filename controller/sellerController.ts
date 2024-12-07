import sellerModel from "../model/sellerModel";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { Request, Response } from "express";

export const createSeller = async (req: Request, res: Response) => {
  try {
    const { email, password, userName, storeName } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const token = crypto.randomBytes(3).toString("hex");

    const user = await sellerModel.create({
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
  } catch (error) {
    return res.status(404).json({
      message: "Error creating ",
    });
  }
};
export const createDispatch = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const token = crypto.randomBytes(3).toString("hex");

    const user = await sellerModel.findOne({
      email,
    });
    return res.status(201).json({
      message: "Seller created successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating ",
    });
  }
};
