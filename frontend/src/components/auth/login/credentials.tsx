"use client";

import {ReadonlyURLSearchParams, useSearchParams} from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, {useEffect, useState} from "react";
import Button from "@/components/auth/button";
import {FaExclamationCircle, FaEye, FaEyeSlash} from "react-icons/fa";

export type SignInProps = {
    csrfToken?: string;
};

const Credentials = ({ csrfToken }: SignInProps) => {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const error: string = searchParams.get('error') ?? '';
    const [signInError, setSignInError] = useState('');
    const [loading, setLoading] = useState(false);
    const [inputErrors, setInputErrors] = useState({ mail: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const validateInputs = (mail: string, password: string) => {
        const errors = { mail: '', password: '' };
        if (!mail) errors.mail = 'メールアドレスは必須です';
        if (!password) errors.password = 'パスワードは必須です';
        setInputErrors(errors);
        return errors.mail === '' && errors.password === '';
    };

    const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
        const mail = formData.get('mail') as string;
        const password: string = formData.get('password') as string;

        if (!validateInputs(mail, password)) {
            setLoading(false);
            return;
        }

        setLoading(true);

        const result = await signIn('credentials', {
            redirect: false,
            mail,
            password,
            callbackUrl: '/',
        });

        if (result?.error) {
            setSignInError(result.error);
            setLoading(false);
        } else {
            window.location.href = '/';
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <form onSubmit={handleSubmit} className={"block"}>
            <div>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
            </div>
            <div className="mb-4">
                <label htmlFor="mail" className="block text-gray-700">メールアドレス
                    {inputErrors.mail && <span className="text-red-500 text-xs ml-3">{inputErrors.mail}</span>}
                </label>
                <input
                    id="mail"
                    name="mail"
                    type="email"
                    className={`w-full px-3 py-2 border rounded-xl placeholder:pl-2 ${inputErrors.mail ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="メールアドレス"
                    onChange={handleChange}/>
                {/*{inputErrors.mail && <p className="text-red-500">{inputErrors.mail}</p>}*/}
            </div>
            <div className={"mb-1"}>
                <label htmlFor="mail" className="block text-gray-700">パスワード
                    {inputErrors.password && <span className="text-red-500 text-xs ml-3">{inputErrors.password}</span>}
                </label>
                <div className="relative">
                    <input
                        id={"password"}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className={`w-full px-3 py-2 border rounded-xl placeholder:pl-2 ${inputErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="パスワード"
                        onChange={handleChange}/>
                    <button
                        type="button"
                        className="absolute right-2 top-3 text-gray-600"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </button>
                </div>
                {/*{inputErrors.password && <p className="text-red-500">{inputErrors.password}</p>}*/}
            </div>
            <button className={"font-bold mb-4"}>
                <span>パスワードを忘れた場合</span>
            </button>
            {signInError && (
                <div
                    className="mb-4 p-4 border border-red-400 text-red-700 bg-red-100 rounded-xl flex items-center">
                        <FaExclamationCircle className="mr-2"/>
                        <div>
                            <strong>サインインに失敗しました。</strong><br/>
                            詳細を確認して、もう一度お試しください。
                        </div>
                    </div>
                )}
                <Button
                    type="submit"
                    loading={loading}
                    text="ログイン"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                />
        </form>
    );
}

export default Credentials
