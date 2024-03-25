"use client";

import {FaHome} from "react-icons/fa";
import {ReactElement, ReactNode, useState} from "react";
import {IoMenu, IoSearchSharp} from "react-icons/io5";
import Link from "next/link";

type Navigation = {
    page: string;
    path: string;
    icon: ReactElement;
}

const Navigations: Navigation[] = [
    {
        page: "Home",
        path: "/",
        icon: <FaHome className={"size-6"} />
    },
    {
        page: "Test",
        path: "/test",
        icon: <FaHome className={"size-6"} />
    }
]

const SideBar = () => {

    const [ menuOpen, setMenuOpen ] = useState(true);

    return(
        <aside className={`fixed min-h-screen duration-300 bg-slate-950 ${menuOpen ? "w-[250px]" : "w-[60px]"}`}>
            <div className={"p-2"}>
                <div className={`flex mb-6 ${menuOpen ? "justify-end" : "justify-center"}`}>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <IoMenu className={"size-5 text-white"}/>
                    </button>
                </div>
                <div className={"mb-6 bg-gray-200 rounded"}>
                    <div className={`flex items-center p-2 ${menuOpen ? "" : "justify-center"}`}>
                        <span className={"flex justify-center"}>
                            <IoSearchSharp className={`${menuOpen ? "mr-4" : "m-0"}`} />
                        </span>
                        <input placeholder="Search..." className={`bg-gray-200 border-none focus:outline-none ${menuOpen ? "visible w-full" : "invisible w-0"}`}/>
                    </div>
                </div>
                <span className={"block h-1 mb-6 bg-gray-200 w-full"}></span>
                {Navigations.map((navigation) => (
                    <Link href={navigation.path} key={navigation.page} className={`flex items-center h-10`}>
                        <span className={`text-white ml-3 mr-2`}>
                            { navigation.icon }
                        </span>
                        <p className={`leading-3 text-xs text-white duration-100 ${menuOpen ? "visible w-auto" : "invisible w-0"}`}>{ navigation.page }</p>
                    </Link>
                ))}
            </div>

        </aside>
    )
}


export default SideBar;