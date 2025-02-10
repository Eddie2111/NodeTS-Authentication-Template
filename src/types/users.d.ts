import { z } from "zod";

import { 
    userValidationSchema, 
    userLoginSchema, 
    userAccountSchema, 
    userProfileSchema 
} from "@/schema/validation/user.validation";

export type TUser = z.infer<typeof userValidationSchema>;
export type TUserLogin = z.infer<typeof userLoginSchema>;
export type TUserAccount = z.infer<typeof userAccountSchema>;
export type TUserProfile = z.infer<typeof userProfileSchema>;
