"use client";

import React from "react";
import Google from "@/components/auth/login/google";
import Credentials, {SignInProps} from "@/components/auth/login/credentials";
import Modal from "@/components/auth/modal";

const Client = ({ csrfToken }: SignInProps) => {

    return (
        <Modal>
            <Credentials csrfToken={csrfToken}/>
            <div className={"flex justify-center my-2"}>
                <p>または</p>
            </div>
            <Google/>
            <div>
                <p className="text-center text-gray-500 mt-6">
                    新規登録は
                    <a href="/auth/register" className="text-blue-500 ml-1">こちら</a>
                </p>
            </div>
        </Modal>
    );
}
export default Client;