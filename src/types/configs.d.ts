interface TSendingCookieProps {
  httpOnly: boolean;
  secure: boolean;
  sameSite: string;
  maxAge: number;
  path: string;
}

interface TSendingHeaderProps {
  "Content-Type": string;
  "access-control-allow-methods": string;
  "access-control-allow-headers": string;
  "access-control-allow-origin": string[];
}

interface TCorsConfigProps {
  origin: boolean;
  methods: string;
  preflightContinue: boolean;
  optionsSuccessStatus: number;
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge: number;
  credentials: boolean;
}

interface TCorsOptionsProps {
  origin: string | string[];
  credentials: boolean;
  optionsSuccessStatus: number;
  preflightContinue: boolean;
  methods: string;
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge: number;
  accessControlAllowOrigin: boolean;
  accessControlAllowCredentials: boolean;
  accessControlAllowMethods: string;
  accessControlAllowHeaders: string;
  accessControlExposeHeaders: string;
}

interface TSessionSettingsProps {
  secret: string;
  saveUninitialized: boolean;
  resave: boolean;
  cookie: SendingCookie;
}

interface TRateLimitConfigProps {
  windowMs: number;
  max: number;
  message: string;
}

interface THelmetHsts {
  maxAge: number;
  includeSubDomains: boolean;
  preload: boolean;
}

export type { 
  TSendingCookieProps, 
  TSendingHeaderProps, 
  TCorsConfigProps, 
  TCorsOptionsProps, 
  TSessionSettingsProps, 
  TRateLimitConfigProps, 
  THelmetHsts };
