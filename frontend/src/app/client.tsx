"use client"

import Logout from "@/components/auth/logout";
import {Session} from "next-auth";

const Client = ({session}: {session: Session | null}) => {
    return(
        <div>
            <div>{session?.user?.name}</div>
            <div>{session?.user?.mail}</div>
            <div>{session?.user?.role}</div>
            <div>{session?.user?.backendToken}</div>
            <div>{session?.expires}</div>
            <img
                src={session?.user?.image ?? ``}
                alt=""
                style={{borderRadius: '50px'}}
            />
            <Logout/>
        </div>
    )
}
export default Client