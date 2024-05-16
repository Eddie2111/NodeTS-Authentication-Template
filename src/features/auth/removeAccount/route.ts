import express, { Request, Response } from 'express';

import { userPropsAccountSchema, ZodError } from '../../../schema/validation/user.validation';
import { ErrorHandler } from '../../../templates/error';
import { successResponse } from '../../../templates/responses';
import RemoveAccountController from './removeAccount.controller';

const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.json(successResponse);
  })
  .post( async(req: Request, res: Response) => {

    try {
      const value = userPropsAccountSchema.parse(req.body);
      const operation = await RemoveAccountController(value);
      res.json({ 
        status: operation ? 200 : 400,
        message: operation ? "Account Removed" : "Failed to remove account",
        data: operation
       });
    } catch (err: unknown) {
        ErrorHandler(err,res);
    }

  });

module.exports = router;
//
