import express, { Request, Response } from "express";
import type {Users} from "@prisma/client";

import { ErrorHandler } from '../../../templates/error';
import { forgotPasswordTrigger,forgotPasswordSet } from "./forgotPassword.controller";
import { userAccountSchema } from "@/schema/validation/user.validation";

interface codeStruct extends Users {
    code: string
}

const router = express.Router();

router
  .route("/")
  .get(async(req: Request, res: Response) => {
    try {
      const data = userAccountSchema.parse({serial:req.query.serial ?? " "});
      const response = await forgotPasswordTrigger(data);
      res.json({
        message:response
      });
    } catch(err:unknown) {
      ErrorHandler(err,res);
    }
  })
  .post(async(req: Request, res: Response) => {
    const response = await forgotPasswordSet({
      serial: req.body.serial ?? "",
      code: req.body.code ?? "",
      password: req.body.password ?? ""
    })
    console.log(response);
    res.json({
      message: response
    });
  });

module.exports = router;
//
