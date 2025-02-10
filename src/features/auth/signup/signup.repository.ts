import prisma from "@/lib/prisma";
import { TUser } from "@/types/users";
import { idGenerate } from "@/utils/IDGenerator";

export const createUser = async(data: TUser)=>{
    await prisma.users.create({
        data: {
            serial: idGenerate(),
            firstName: data?.firstName,
            lastName: data?.lastName,
            email: data?.email,
            password: data?.password,
            active: data?.active
        },
    });
};
