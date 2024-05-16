import { CorsConfigProps, CorsOptionsProps, SendingCookieProps, SendingHeaderProps, SessionSettingsProps } from "../types/configs.d";

const sendingCookie = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
};

const sendingHeader = {
  "Content-Type": "text/json",
  "access-control-allow-origin": ["https://localhost:3100"],
  "access-control-allow-methods": "GET, POST",
  "access-control-allow-headers": "Origin, Authorization",
};
//
const corsConfig = {
  origin: true,
  methods: "GET,POST", //GET,HEAD,PUT,PATCH,POST,DELETE
  preflightContinue: false,
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Type"],
  maxAge: 60000,
  credentials: true,
};

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: true,
  methods: "GET,POST",
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Type"],
  maxAge: 3600,
  accessControlAllowOrigin: true,
  accessControlAllowCredentials: true,
  accessControlAllowMethods: "GET,POST",
  accessControlAllowHeaders: "Content-Type,Authorization",
  accessControlExposeHeaders: "Content-Type",
};

const sessionSettings = {
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
    sendingCookie,
  },
};

export { sendingHeader, sendingCookie, corsConfig, sessionSettings, corsOptions };
