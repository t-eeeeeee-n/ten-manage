"use client"

import {useSession} from "next-auth/react";
import Logout from "@/components/auth/logout";
import Login from "@/components/auth/login";
import Image from 'next/image';

const Client = () => {

    const { data: session, status } = useSession();
    return (
        <div>
            {status === 'authenticated' ? (
                <div>
                    <p>セッションの期限：{session.expires}</p>
                    <p>ようこそ、{session.user?.name}さん</p>
                    <Image
                        src={session.user?.image ?? ``}
                        alt=""
                        style={{ borderRadius: '50px' }}
                    />
                    <div>
                        <Logout />
                    </div>
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default Client;