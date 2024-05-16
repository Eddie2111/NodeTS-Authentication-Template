"use strict";

interface SendingCookieProps {
  httpOnly: boolean;
  secure: boolean;
  sameSite: string;
  maxAge: number;
  path: string;
}

interface SendingHeaderProps {
  "Content-Type": string;
  "access-control-allow-methods": string;
  "access-control-allow-headers": string;
  "access-control-allow-origin": string[];
}
//
interface CorsConfigProps {
  origin: boolean;
  methods: string;
  preflightContinue: boolean;
  optionsSuccessStatus: number;
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge: number;
  credentials: boolean;
}

interface CorsOptionsProps {
  origin: string;
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

interface SessionSettingsProps {
  secret: string;
  saveUninitialized: boolean;
  resave: boolean;
  cookie: SendingCookie;
}

export type { SendingCookieProps, SendingHeaderProps, CorsConfigProps, CorsOptionsProps, SessionSettingsProps };
