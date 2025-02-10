import argon2 from "argon2";
import { createUser } from "./signup.repository";
import { TUser } from "@/types/users";

export default async function SignupUser(data: TUser) {
  if (data) {
    try {
      const passwordhash = await argon2.hash(data?.password ?? "");
      data.password = passwordhash;
      data.active = true;
      console.log("from login", data.password, "+", passwordhash);
      await createUser(data);
      return true;
    } catch (err: unknown) {
      console.log(err);
      return false;
    };
  }
  else {
    return false;
  }
}
