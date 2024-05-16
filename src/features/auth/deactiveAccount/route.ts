import express, { Request, Response } from "express";

import { ZodError, userPropsAccountSchema } from "../../../schema/validation/user.validation";
import { ErrorHandler } from '../../../templates/error';
import DeactiveAccount from "./deactiveAccount.controller"

const router = express.Router();

router
  .route("/")
  .get(async (req: Request, res: Response) => {
    try {
      const data = userPropsAccountSchema.parse({serial:req.query.serial});
      res.json({
        ...data,
        message: await DeactiveAccount(data)
      });
    } catch(err:unknown) {
      ErrorHandler(err,res);
    }
  })
  .post((req: Request, res: Response) => {
    res.json({});
  });

module.exports = router;
//
