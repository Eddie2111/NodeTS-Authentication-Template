import type {Users} from "@prisma/client";

import prisma from "../../../lib/prisma";

export default async function DeactiveAccount(data: Partial<Users | null>): Promise<boolean>{
    try{
        await prisma.users.update({
            where: {
                serial: data?.serial ?? ""
            },
            data: {
                active: false,
            }
        })
        return true;
    }catch(err:unknown){
        console.log(err)
        return false;
    }
}