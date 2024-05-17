import React from 'react';
import { useSession, signIn } from 'next-auth/react';

const Login = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status !== 'authenticated') {
        return (
            <div>
                <p>あなたはログインしていません</p>
                <button onClick={() => signIn('credentials', { redirect: true, callbackUrl: '/' }, { prompt: 'login' })}>
                    Googleでログイン
                </button>
            </div>
        );
    }
    return null;
}

export default Login;