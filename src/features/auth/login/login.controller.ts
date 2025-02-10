import argon2 from "argon2";
import jwt from "jsonwebtoken";

import { getOneUser } from "./login.repository";

import type { TUserLogin } from "@/types/users";
import type { Response } from "express";
import type { Users } from "@prisma/client";
import { envInstance } from "@/lib/environment";

export default async function LoginUser(data: TUserLogin, res: Response) {
    try {
        const getUser: Partial<Users | null> = await getOneUser(data);
        if (!getUser) return false;
        const passwordMatch = await argon2.verify(getUser.password ?? "", data.password);
        if (passwordMatch) {
            const payload = {
                serial: getUser?.serial,
                email: getUser?.email
            }
            const secret = envInstance.getEnvironmentVariable("JWT_SECRET");
            const token: string = jwt.sign(payload, secret, { expiresIn: "1h" });
            res.cookie('user', token, {
                httpOnly: true,
                secure: true,
            });
            res.json({
                data: { payload, token },
                message: "login success",
                status: 200
            })
        } else {
            res.json({
                data: {},
                message: "login failed",
                status: 400
            })
        }
    } catch (err: unknown) {
        console.log(err);
        return false;
    }
}
