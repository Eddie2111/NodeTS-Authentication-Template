import { envInstance } from "@/lib/environment";
import { 
  TCorsConfigProps, 
  TCorsOptionsProps, 
  TSendingCookieProps, 
  TSendingHeaderProps, 
  TSessionSettingsProps,
  TRateLimitConfigProps,
  THelmetHsts,
} from "@/types/configs.d";

const sendingCookie: TSendingCookieProps = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
};

const rateLimitConfig: TRateLimitConfigProps = {
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later.",
}

const sendingHeader: TSendingHeaderProps = {
  "Content-Type": "text/json",
  "access-control-allow-origin": ["https://localhost:3100"],
  "access-control-allow-methods": "GET, POST",
  "access-control-allow-headers": "Origin, Authorization",
};

const corsConfig: TCorsConfigProps = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Type"],
  maxAge: 60000,
  credentials: true,
};

const helmetHsts: THelmetHsts = {
  maxAge: 31536000,
  includeSubDomains: true,
  preload: true,
}

const corsOptions: TCorsOptionsProps = {
  origin: [ "http://localhost:3000", /* add other cors origins here, basically your frontend url's should be here */ ],
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

const sessionSettings: TSessionSettingsProps = {
  secret: envInstance.getEnvironmentVariable('SESSION_SECRET'),
  saveUninitialized: true,
  resave: false,
  cookie: {
    sendingCookie,
  },
};

export { 
  sendingHeader, 
  sendingCookie, 
  rateLimitConfig, 
  corsConfig, 
  sessionSettings, 
  corsOptions,
  helmetHsts,
};
