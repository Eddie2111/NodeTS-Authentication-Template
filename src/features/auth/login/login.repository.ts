import prisma from "@/lib/prisma";
import { TUserLogin } from "@/types/users";

interface TLoginResponse {
    serial: string;
    email: string;
    active: boolean | null;
    password: string;
}

export const getOneUser = async(data: TUserLogin): Promise<TLoginResponse | null>=> {
    const response = await prisma.users.findUnique({
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
    return response;
}