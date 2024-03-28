"use client";

import {FaBrain, FaHome, FaLaptopCode, FaPenNib} from "react-icons/fa";
import {ReactElement, useEffect, useState} from "react";
import {IoMenu, IoSearchSharp} from "react-icons/io5";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {SiTestinglibrary} from "react-icons/si";
import {IoMdSettings} from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import {TbUserQuestion} from "react-icons/tb";

interface Navigation {
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
        page: "Liked",
        path: "/liked",
        icon: <MdFavorite className={"size-6"} />
    },
    {
        page: "Diary",
        path: "/diary",
        icon: <FaPenNib className={"size-6"} />
    },
    {
        page: "Idea",
        path: "/idea",
        icon: <TbUserQuestion className={"size-6"} />
    },
    {
        page: "Code",
        path: "/code",
        icon: <FaLaptopCode className={"size-6"} />
    },
    {
        page: "Setting",
        path: "/setting",
        icon: <IoMdSettings className={"size-6"} />
    },
    {
        page: "SSR-Test",
        path: "/test/ssr",
        icon: <SiTestinglibrary className={"size-6"} />
    }
]

const SideBar = () => {

    const [ menuOpen, setMenuOpen ] = useState(true);

    useEffect(() => {
        // 初期値
        setMenuOpen(window.innerWidth > 768);

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const listener = () => setMenuOpen(!mediaQuery.matches);
        mediaQuery.addEventListener("change", listener)
        return () => mediaQuery.removeEventListener("change", listener)
    }, []);

    const pathname = usePathname();

    const isPageActive = (pagePath: string): boolean => {
        return pagePath === pathname
    }

    return(
        <aside className={`duration-300 bg-slate-950 overflow-y-auto overflow-x-hidden min-h-screen min-w-[60px] ${menuOpen ? "w-[250px]" : "w-[60px]"}`}>
            <div className={"p-2"}>
                <div className={`flex mb-6 ${menuOpen ? "justify-end" : "justify-center"}`}>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <IoMenu className={"size-5 text-white"}/>
                    </button>
                </div>
                <div className={"mb-6 bg-gray-200 rounded"}>
                    <div className={`flex items-center p-2 ${menuOpen ? "" : "justify-center"}`}>
                        <span className={"flex justify-center"}>
                            <IoSearchSharp className={`${menuOpen ? "mr-4" : "m-0"}`}/>
                        </span>
                        <label htmlFor="header-search" />
                        <input id="header-search" placeholder="Search..."
                               className={`bg-gray-200 border-none focus:outline-none ${menuOpen ? "visible w-full" : "invisible w-0"}`}/>
                    </div>
                </div>
                <span className={"block h-1 mb-6 bg-gray-200 w-full"}></span>
                {Navigations.map((navigation) => (
                    <Link href={navigation.path} key={navigation.page}
                          className={`flex items-center h-10 ${isPageActive(navigation.path) ? "bg-blue-700" : "hover:bg-blue-900"}`}>
                        <span className={`text-white ml-3 mr-2`}>
                            {navigation.icon}
                        </span>
                        <p className={`leading-3 text-xs text-white duration-100 ${menuOpen ? "visible w-auto" : "invisible w-0"}`}>{navigation.page}</p>
                    </Link>
                ))}
            </div>

        </aside>
    )
}


export default SideBar;