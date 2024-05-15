import NextAuth, {DefaultSession, Session, User} from "next-auth"
import authConfig from "./auth.config"
import {JWT} from "next-auth/jwt";

export const {handlers: { GET, POST }, auth, signIn, signOut,} = NextAuth({
    session: {strategy: 'jwt',},
    ...authConfig,
    // callbacks: {
    //     // `jwt()`コールバックは`authorize()`の後に実行されます。
    //     // `user`に追加したプロパティ`role`と`backendToken`を`token`に設定します。
    //     jwt({token, user}: {token: JWT; user: User}) {
    //         if (user) {
    //             token.role = user.role;
    //             token.backendToken = user.backendToken;
    //         }
    //         return token;
    //     },
    //     // `session()`コールバックは`jwt()`の後に実行されます。
    //     // `token`に追加したプロパティ`role`と`backendToken`を`session`に設定します。
    //     session({session, token}: {session: Session; token: JWT}) {
    //         session.user.role = token.role;
    //         session.user.backendToken = token.backendToken;
    //         return session;
    //     },
    // }
})

// prisma
// import NextAuth from "next-auth"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"
// import authConfig from "./auth.config"
//
// const prisma = new PrismaClient()
//
// export const { handlers, auth } = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     session: { strategy: "jwt" },
//     ...authConfig,
// })