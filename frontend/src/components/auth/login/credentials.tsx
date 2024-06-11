"use client";

import {ReadonlyURLSearchParams, useSearchParams} from 'next/navigation';
import { signIn } from 'next-auth/react';
import React from "react";

export type SignInProps = {
    csrfToken?: string;
};

const Credentials = ({ csrfToken }: SignInProps) => {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const error: string = searchParams.get('error') ?? '';

    const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
        const username: string = formData.get('username') as string;
        const password: string = formData.get('password') as string;

        await signIn('credentials', {
            redirect: true,
            email: username,
            password,
            callbackUrl: '/',
        });
    };

    return (
        <form onSubmit={handleSubmit} className={"block"}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
            <label htmlFor={"mail"} className={"block"}>メールアドレス</label>
            <input id={"mail"} name="mail" type="text" className={"w-full py-1 border-2 rounded-xl placeholder:pl-4"} placeholder="メールアドレス"/>
            <label htmlFor={"password"} className={"block"}>パスワード</label>
            <input id={"password"} name="password" type="password" className={"w-full py-1 border-2 rounded-xl mb-1 placeholder:pl-4"}　placeholder="パスワード"/>
            <button className={"font-bold mb-3"}>パスワードを忘れた場合</button>
            <button type="submit" className={"block w-full h-full py-1 mb-2 bg-red-600 text-white rounded-3xl border-2"}>
                <span>ログイン</span>
            </button>
            {error && <div>サインイン失敗</div>}
        </form>
    );
}

export default Credentials
