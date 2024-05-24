import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import Logout from "@/components/auth/logout";

const Google = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {status === 'authenticated' ? (
                <div>
                    <p>セッションの期限：{session.expires}</p>
                    <p>ようこそ、{session.user?.name}さん</p>
                    <img
                        src={session.user?.image ?? ``}
                        alt=""
                        style={{ borderRadius: '50px' }}
                    />
                    <div>
                        <Logout />
                    </div>
                </div>
            ) : (
                <div>
                    <p>あなたはログインしていません</p>
                    <button onClick={() => signIn('google', { redirect: true, callbackUrl: '/' }, { prompt: 'login' })}>
                        Googleでログイン
                    </button>
                </div>
            )}
        </div>
    );
}

export default Google;