"use client";

import React from "react";
import Google from "@/components/auth/login/google";
import Credentials, {SignInProps} from "@/components/auth/login/credentials";
import Image from "next/image";

const Client = ({ csrfToken }: SignInProps) => {

    return (
        <div className={"w-96 mx-auto mt-32 bg-neutral-50 p-10 "}>
            <div className={"flex flex-col justify-center items-center"}>
                <Image alt="logo" src="/common/ten-ten.svg" width={100} height={100} className={""}/>
                <span>ten-dev</span>
            </div>
            <Credentials csrfToken={csrfToken} />
            <div className={"flex justify-center mb-2"}>
                <p>または</p>
            </div>
            <Google />
        </div>
    );
}
export default Client;