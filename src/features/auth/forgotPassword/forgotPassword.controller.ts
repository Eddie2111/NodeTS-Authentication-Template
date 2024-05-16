import argon2 from "argon2";
import dotenv from 'dotenv';
import {z} from "zod";
import type {Users} from "@prisma/client";

import { getRedisInstance } from "../../../lib/ioredis";
import prisma from "../../../lib/prisma";
import { ZodError, userPropsAccountSchema } from "../../../schema/validation/user.validation";
import { randomInt } from "../../../utils/IDGenerator";

dotenv.config();

export async function forgotPasswordTrigger(data: Partial<z.infer<typeof userPropsAccountSchema>>): Promise<boolean>{
    try{
        const redis = getRedisInstance();
        const code = randomInt();
        console.log(code);
        await redis.setex(data?.serial ?? " ", 3600, code.toString());
        return true;
    }catch(err:unknown){
        console.log(err)
        return false;
    }
}

interface codeStruct extends Users {
    code: string
}

export async function forgotPasswordSet(data: Partial<codeStruct | null>): Promise<boolean>{
    try{
        const redis = getRedisInstance();
        const storedCode = await redis.get(data?.serial ?? " ");
        const passwordhash = await argon2.hash(data?.password ?? "");
        if (storedCode === data?.code) {
            await prisma.users.update({
                where: {
                    serial: data?.serial ?? ""
                },
                data: {
                    password: passwordhash
                }
            })
            return true;
        } else {
            return false;
        }
    }catch(err:unknown){
        console.log(err)
        return false;
    }
}