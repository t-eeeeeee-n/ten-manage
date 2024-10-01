import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import type {NextRequest} from "next/server";
import type {Session} from "@auth/core/types";

declare module "next-auth" {
    // クライアント側で使用するsession（useSessionから取得するオブジェクト）にプロパティを追加します。
    // ここでは`role`と`backendToken`を追加しています。
    interface Session {
        user: {
            role?: string;
            backendToken?: string;
            mail?: string;
        } & DefaultSession["user"];
    }
    interface User {
        role?: string;
        backendToken?: string;
    }
}

declare module "next-auth/jwt" {
    // "jwt"コールバックのtokenパラメータに任意のプロパティを追加します。
    interface JWT {
        role?: string;
        backendToken?: string;
    }
}

declare module "next/server" {
    export interface NextRequest {
        auth?: Session | null;
    }
}
