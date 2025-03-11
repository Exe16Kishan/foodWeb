import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import type { auth } from "./auth";
 
export const {signIn,signUp,signOut,useSession} = createAuthClient({
    baseURL:"http://localhost:3000/api/auth",
    fetchOptions:{
        
    },
    
  plugins: [inferAdditionalFields<typeof auth>()],
});