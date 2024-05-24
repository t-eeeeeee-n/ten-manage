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
            <label htmlFor={"user"} className={"block"}>ユーザ名</label>
            <input id={"user"} name="username" type="text" className={"w-full border"}/>
            <label htmlFor={"password"} className={"block"}>パスワード</label>
            <input id={"password"} name="password" type="password" className={"w-full border"}/>
            <button type="submit" className={"block"}>サインイン</button>
            {error && <div>サインイン失敗</div>}
        </form>
    );
}

export default Credentials
