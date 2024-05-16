import argon2 from "argon2";
import express, { Request, Response } from "express";

import { userPropsSchema, ZodError } from "../../../schema/validation/user.validation";
import { ErrorHandler } from '../../../templates/error';
import { idGenerate } from "../../../utils/IDGenerator";
import SignupUser from "./signup.controller";

const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.status(400).send("Server not found");
  })
  .post(async (req: Request, res: Response) => {
    try {
      const value = req.body;
      const parsedValue = { ...value, serial: idGenerate(), active: true };
      const filterValue = userPropsSchema.parse(parsedValue);
      const operation = await SignupUser(filterValue);
      res.json({ 
        status: operation ? 200 : 400,
        message: operation ? "Account Created" : "Email exists",
        data: operation
       });
    } catch (err: unknown) {
      ErrorHandler(err,res);
    }
  });

module.exports = router;
