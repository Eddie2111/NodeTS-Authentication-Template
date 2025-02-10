import express, { Request, Response } from "express";

import { ErrorHandler } from '../../../templates/error';
import DeactiveAccount from "./deactiveAccount.controller"
import { userAccountSchema } from "@/schema/validation/user.validation";

const router = express.Router();

router
  .route("/")
  .get(async (req: Request, res: Response) => {
    try {
      const data = userAccountSchema.parse({serial:req.query.serial});
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
