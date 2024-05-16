import express, { Request, Response } from "express";

import { successResponse } from "../../../templates/responses";

const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.json(successResponse);
  })
  .post((req: Request, res: Response) => {
    res.json(successResponse);
  });

module.exports = router;
//
