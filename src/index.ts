import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import morgan from "morgan";
import path from "path";

import { corsOptions, sessionSettings } from "./configs";
import { Connect_cache } from "./lib/ioredis";
import { Mongo_Connect } from "./lib/mongo";
import { envInstance } from "./lib/environment";

dotenv.config();

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// features

// auth services
app.use("/", require("./features/auth/index/route"));
app.use("/login", require("./features/auth/login/route"));
app.use("/signup", require("./features/auth/signup/route"));
app.use("/verify", require("./features/auth/verify/route"));
app.use("/forgotPassword", require("./features/auth/forgotPassword/route"));
app.use("/removeAccount", require("./features/auth/removeAccount/route"));
app.use("/activeAccount", require("./features/auth/activateAccount/route"));
app.use("/deactiveAccount", require("./features/auth/deactiveAccount/route"));


/*
This is the startpoint of the server.
Mongo and Redis switch is provided here.
Only use the one you need and you may comment out or remove the switches as per your choice
*/

async function startUp() { 
  await envInstance.init();
}
startUp().then(() => {
  const port = envInstance.getEnvironmentVariable('PORT');
  app.listen(parseInt(port), async () => {
    console.log("server →", port);
  });  
})


