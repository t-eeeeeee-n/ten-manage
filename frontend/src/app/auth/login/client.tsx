"use client";

import {ReadonlyURLSearchParams, useSearchParams} from 'next/navigation';
import { signIn } from 'next-auth/react';
import React from "react";

export type SignInProps = {
    csrfToken?: string;
};

export default function SignIn({ csrfToken }: SignInProps) {
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
        <form onSubmit={handleSubmit}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
                ユーザ名
                <input name="username" type="text" />
            </label>
            <label>
                パスワード
                <input name="password" type="password" />
            </label>
            <button type="submit">サインイン</button>
            {error && <div>サインイン失敗</div>}
        </form>
    );
}
