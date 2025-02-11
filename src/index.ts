import cors from "cors";
import express from "express";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { corsOptions, helmetHsts, rateLimitConfig } from "./configs";
import { envInstance } from "./lib/environment";

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

app.use(morgan("combined", 
  { stream: accessLogStream, 
    skip: (req) => req.url.includes("password") || req.url.includes("token"), 
  }
));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet.hsts(helmetHsts));
app.use(rateLimit(rateLimitConfig));

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

// error handling
app.use((err: Error, req: express.Request, res: express.Response) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

async function startUp() { 
  await envInstance.init();
}
startUp().then(() => {
  const port = envInstance.getEnvironmentVariable('PORT');
  app.listen(parseInt(port), async () => {
    console.log("server →", port);
  });  
})


