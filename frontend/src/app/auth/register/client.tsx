"use client"

import React, {ChangeEvent, FormEvent, useState} from "react";
import Modal from "@/components/auth/modal";
import Button from "@/components/auth/button";
import {FaExclamationCircle, FaEye, FaEyeSlash} from "react-icons/fa";

type Errors = {
    name?: string;
    mail?: string;
    password?: string;
    confirmPassword?: string;
};

const Client = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<Errors>({});
    const [signInError, setSignInError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validate = () => {
        const newErrors: Errors = {};
        if (!name) newErrors.name = "ユーザ名は必須です";
        if (!mail) newErrors.mail = "メールアドレスは必須です";
        if (password.length < 5) newErrors.password = "パスワードは5文字以上です";
        if (!password) newErrors.password = "パスワードは必須です";
        if (password !== confirmPassword) newErrors.confirmPassword = "パスワードが一致しません";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                const res = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, mail, password }),
                });

                if (res.ok) {
                    window.location.href = '/auth/login';
                } else {
                    const errorData = await res.json();
                    setSignInError(errorData.error || '新規登録に失敗しました。');
                    setLoading(false);
                }
            } catch (error) {
                setSignInError('新規登録に失敗しました。');
                setLoading(false);
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
        switch (name) {
            case "name":
                setName(value);
                break;
            case "mail":
                setMail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    return (
        <Modal>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">ユーザー名
                        {errors.name && <span className="text-red-500 text-xs ml-3">{errors.name}</span>}
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-xl placeholder:pl-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="ユーザー名"
                    />
                    {/*{errors.name && <p className="text-red-500">{errors.name}</p>}*/}
                </div>
                <div className="mb-4">
                    <label htmlFor="mail" className="block text-gray-700">メールアドレス
                        {errors.mail && <span className="text-red-500 text-xs ml-3">{errors.mail}</span>}
                    </label>
                    <input
                        id="mail"
                        name="mail"
                        type="email"
                        value={mail}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-xl placeholder:pl-2 ${errors.mail ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="メールアドレス"
                    />
                    {/*{errors.mail && <p className="text-red-500">{errors.mail}</p>}*/}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">パスワード
                        {errors.password && <span className="text-red-500 text-xs ml-3">{errors.password}</span>}
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-xl placeholder:pl-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="パスワード"
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-3 text-gray-600"
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? <FaEyeSlash/> : <FaEye/>}
                        </button>
                    </div>
                    {/*{errors.password && <p className="text-red-500">{errors.password}</p>}*/}
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-gray-700">パスワード確認
                        {errors.confirmPassword &&
                            <span className="text-red-500 text-xs ml-3">{errors.confirmPassword}</span>}
                    </label>
                    <div className="relative">
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-xl placeholder:pl-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="パスワード確認"
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-3 text-gray-600"
                            onClick={toggleShowConfirmPassword}
                        >
                            {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                        </button>
                    </div>
                    {/*{errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}*/}
                </div>
                {signInError && (
                    <div
                        className="mb-4 p-4 border border-red-400 text-red-700 bg-red-100 rounded-xl flex items-center">
                        <FaExclamationCircle className="mr-2"/>
                        <div>
                            <strong>新規登録に失敗しました。</strong><br/>
                            {signInError}
                        </div>
                    </div>
                )}
                <Button
                    type="submit"
                    loading={loading}
                    text="新規登録"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                />
            </form>
            <div className={"text-gray-500 mt-6"}>
                <p className="text-center">
                    <span>すでにアカウントをお持ちですか？{' '}</span><br/>
                    <a href="/auth/login" className="text-blue-500">ログイン</a>
                </p>
            </div>
        </Modal>
    )
}
export default Client;
