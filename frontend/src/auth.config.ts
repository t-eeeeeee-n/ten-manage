import GitHub from "next-auth/providers/github"
import type {NextAuthConfig, Session, User} from "next-auth"
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";

// export default { providers: [GitHub, Google] } satisfies NextAuthConfig
export default {
    secret: "aaaaa",
    providers: [
        Google(
            {
                clientId: process.env.GOOGLE_CLIENT_ID ?? '',
                clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
            }
        ),
        Credentials({
            credentials: {
                email: { label: "メールアドレス", type: "email" },
                password: { label: "パスワード", type: "password" },
            },
            async authorize(credentials) {
                // credentials に入力が渡ってくる
                const user = {
                    id: "id",
                    name: "ten",
                    email: "ten@example.com",
                    role: "admin",
                    backendToken: "backEndAccessToken",
                };
                if(user){
                    return user;
                }else{
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        // `jwt()`コールバックは`authorize()`の後に実行されます。
        // `user`に追加したプロパティ`role`と`backendToken`を`token`に設定します。
        jwt({token, user}: {token: JWT; user: User}) {
            if (user) {
                token.role = user.role;
                token.backendToken = user.backendToken;
            }
            return token;
        },
        // `session()`コールバックは`jwt()`の後に実行されます。
        // `token`に追加したプロパティ`role`と`backendToken`を`session`に設定します。
        session({session, token}: {session: Session; token: JWT}) {
            session.user.role = token.role;
            session.user.backendToken = token.backendToken;
            return session;
        },
    }
} satisfies NextAuthConfig