import express, { Request, Response } from "express";

const router = express.Router();

const data = {
  title: "welcome",
  message: "data came from node backend",
  version: "30.11.22",
};
router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("/connecteen");
  })
  .post((req: Request, res: Response) => {
    res.json(data);
  });

module.exports = router;
