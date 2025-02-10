import argon2 from "argon2";
import dotenv from 'dotenv';
import type {Users} from "@prisma/client";

import { getRedisInstance } from "@/lib/ioredis";
import prisma from "@/lib/prisma";

import { randomInt } from "@/utils/IDGenerator";
import { TUserAccount } from "@/types/users";

dotenv.config();

export async function forgotPasswordTrigger(data: TUserAccount): Promise<boolean>{
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