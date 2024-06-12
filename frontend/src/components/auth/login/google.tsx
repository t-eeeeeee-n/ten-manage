import React from 'react';
import { signIn } from 'next-auth/react';
import Button from "@/components/auth/button";

const Google = () => {

    return (
        <div>
            <Button
                onClick={() => signIn('google', { redirect: true, callbackUrl: '/' }, { prompt: 'login' })}
                text="Googleで続ける"
                className="bg-white text-black hover:bg-gray-100"
                iconSrc="/common/google-g-2015.svg"
            />
        </div>
    );
}

export default Google;