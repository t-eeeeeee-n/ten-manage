"use client"

import Logout from "@/components/auth/logout";
import {Session} from "next-auth";
import Image from "next/image";

const Client = ({session}: {session: Session | null}) => {
    return(
        <div>
            <div>{session?.user?.name}</div>
            <div>{session?.user?.email}</div>
            <div>{session?.user?.role}</div>
            <div>{session?.user?.backendToken}</div>
            <div>{session?.expires}</div>
            <Image
                src={session?.user?.image ?? ``}
                alt=""
                style={{borderRadius: '50px'}}
            />
            <Logout/>
        </div>
    )
}
export default Client