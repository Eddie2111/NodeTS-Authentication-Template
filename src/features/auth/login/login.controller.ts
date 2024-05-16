import argon2 from "argon2";
import type { Response } from "express";
import jwt from "jsonwebtoken";
import type { Users } from "@prisma/client";

import prisma from "../../../lib/prisma";
import { userPropsLoginSchema } from "../../../schema/validation/user.validation";
import { idGenerate } from "../../../utils/IDGenerator";

export default async function LoginUser(data: Partial<Users | null>, res:Response) {
  try {
    const response: Partial<Users | null> = await prisma.users.findUnique({
        where: {
            email: data?.email ?? ""
        },
        select: {
            serial: true,
            email: true,
            active: true,
            password: true
        },
    })
    const passwordMatch = await argon2.verify(response?.password ?? "", data?.password ?? "");
    console.log(response?.password , data?.password );
    if (passwordMatch) {
        const payload = {
            serial: response?.serial,
            email: response?.email
        }
        const secret = process.env.SECRET as string ?? "secret";
        const token:string = jwt.sign(payload, secret);
        res.cookie('user', payload, {
            httpOnly: true,
            secure: true,
        });
        res.json({
            data: payload,
            message:"login success",
            status: 200
        })
    } else {
        res.json({
            data: {},
            message:"login failed",
            status: 400
        })
    }
  } catch (err: unknown) {
    console.log(err);
    return false;
  }
}
