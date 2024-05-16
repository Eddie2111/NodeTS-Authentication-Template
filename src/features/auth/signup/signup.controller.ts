import argon2 from "argon2";
import type {Users} from "@prisma/client";

import prisma from "../../../lib/prisma";
import { userPropsSchema } from "../../../schema/validation/user.validation";
import { idGenerate } from "../../../utils/IDGenerator";

export default async function SignupUser(data: Partial<Users | null>) {
  try {
    const passwordhash = await argon2.hash(data?.password ?? "");
    console.log("from login", data?.password,"+", passwordhash);
    await prisma.users.create({
      data: {
        serial: idGenerate() ?? "",
        firstName: data?.firstName ?? "",
        lastName: data?.lastName ?? "",
        email: data?.email ?? "",
        password: passwordhash,
        active: data?.active ?? true
      },
    });
    return true;
  } catch (err: unknown) {
    console.log(err);
    return false;
  }
}
