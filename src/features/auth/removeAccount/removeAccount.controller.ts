import type {Users} from "@prisma/client";

import prisma from "../../../lib/prisma";

export default async function RemoveAccount(data: Partial<Users | null>) {
    try{
        const response = await prisma.users.delete({
            where: {
                email: data?.email ?? ""
            }
        })
        return true;
    } catch(err:unknown) {
        
        return false;
    }
}