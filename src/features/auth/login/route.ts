import express, { Request, Response } from "express";

import { userPropsLoginSchema, ZodError } from "../../../schema/validation/user.validation";
import { ErrorHandler } from '../../../templates/error';
import LoginUser from "./login.controller";

const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.status(400).send("Server not found");
  })
  .post(async (req: Request, res: Response) => {
    try {
      const value = req.body;
      const filterValue = userPropsLoginSchema.parse(value);
      return await LoginUser(filterValue,res);
    } catch (err: unknown) {
      // Error Handling here
      ErrorHandler(err,res);
    }
  });

module.exports = router;
