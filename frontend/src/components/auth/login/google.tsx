import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import Logout from "@/components/auth/logout";
import Image from "next/image";

const Google = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div >
                <button className={"w-full h-full py-1 bg-white rounded-3xl border-2"} onClick={() => signIn('google', { redirect: true, callbackUrl: '/' }, { prompt: 'login' })}>
                    <div>
                        <Image className={"absolute ml-4"} alt="google" src="/common/google-g-2015.svg" width={20} height={20}></Image>
                        <span>Googleで続ける</span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Google;