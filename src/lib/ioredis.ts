import { Redis } from "ioredis";

("use strict");

let redis: Redis | undefined;
let conn: Redis | undefined;

export function Connect_cache(url: string) {
  try {
    conn = new Redis(url || " ") as Redis;
    console.log("Redis ->", 200);
    return conn;
  } catch (err) {
    console.log("Error creating connection for ", url);
    return conn;
  }
}
//
export function getRedisInstance() {
  if (!conn) {
    throw new Error("Redis connection has not been established yet.");
  }
  return conn;
}
