import GitHub from "next-auth/providers/github"
import type {NextAuthConfig, Session, User} from "next-auth"
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";
import bcrypt from 'bcryptjs';
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

// export default { providers: [GitHub, Google] } satisfies NextAuthConfig
const authOptions: NextAuthConfig = {
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
                mail: { label: "メールアドレス", type: "mail" },
                password: { label: "パスワード", type: "password" },
            },
            async authorize(credentials) {
                const mail = credentials?.mail as string;
                const password = credentials?.password as string;

                const user = await authenticateUser(mail, password);

                if (user) {
                    return {
                        id: user.id,
                        name: user.name,
                        mail: user.mail,
                        role: user.role,
                        backendToken: user.backendToken,
                    };
                } else {
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
}

async function authenticateUser(mail: string, password: string) {
    const user = await prisma.user.findUnique({
        where: { mail }
    });

    if (user && await bcrypt.compare(password, user.password)) {
        return {
            id: user.id.toString(),
            name: user.name,
            mail: user.mail,
            role: user.role,
            backendToken: user.backendToken,
        };
    }
    return null;
}

export default authOptions satisfies NextAuthConfig;