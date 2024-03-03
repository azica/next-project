import NextAuth from "next-auth"

import { authConfig } from "@/configs/auth.config.ts"

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
