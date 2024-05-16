import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";

("use strict");

dotenv.config();

let mongooseConn: unknown;
const mongoDB_url: string = (process.env.MONGODB_URI as string) ?? "";

export async function Mongo_Connect(): Promise<typeof mongooseConn> {
  try{
    if (!mongooseConn) {
      mongooseConn = await connect(mongoDB_url);
      console.log("mongoDB ->", 200);
    } else {
      console.log("using cached connection");
    }
    return mongooseConn;
  } catch(err:unknown) {
    console.log(" Mongoose connection error! ");
    return mongooseConn;
  }
}
//
