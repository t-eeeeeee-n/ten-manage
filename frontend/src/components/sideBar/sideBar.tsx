"use client";

import React, {ReactElement, useEffect, useState} from "react";
import {IoMenu, IoSearchSharp} from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type Navigation = {
    page: string;
    path: string;
    icon: ReactElement;
}

type SideBarProps = {
    children: React.ReactNode;
    navigations: Navigation[]; // Navigation 型の配列を受け取る
};

const SideBar: React.FC<SideBarProps> = ({ children, navigations }) => {

    const [ menuOpen, setMenuOpen ] = useState(true);
    const [asideHeight, setAsideHeight] = useState('100vh');

    // ヘッダー要素の参照を作成

    useEffect(() => {
        const headerElement: null | HTMLElement = document.querySelector('header');
        if (headerElement) {
            const headerHeight: number = headerElement.offsetHeight;
            setAsideHeight(`calc(100vh - ${headerHeight}px)`);
        }

        const mediaQuery: MediaQueryList = window.matchMedia('(max-width: 768px)');
        const listener = () => setMenuOpen(!mediaQuery.matches);
        mediaQuery.addEventListener("change", listener);

        return () => {
            mediaQuery.removeEventListener("change", listener);
        };
    }, []);

    const pathname: string = usePathname();

    const isPageActive = (pagePath: string): boolean => {
        return pagePath === pathname
    }

    return(
        <>
            <aside
                className={`fixed duration-300 ease-in-out overflow-y-auto overflow-x-hidden min-w-[65px] shadow-md dark:shadow-zinc-500 ${menuOpen ? "w-[250px]" : "w-[60px]"}`}
                style={{ height: asideHeight }}>
                <div className={"p-2"}>
                    <div className={`flex mb-6 ${menuOpen ? "justify-end" : "justify-center"}`}>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <IoMenu className={"size-5"}/>
                        </button>
                    </div>
                    <div className={"mb-6 bg-gray-200 rounded"}>
                        <div className={`flex items-center p-2 ${menuOpen ? "" : "justify-center"}`}>
                        <span className={"flex justify-center"}>
                            <IoSearchSharp className={`text-black ${menuOpen ? "mr-4" : "m-0"}`}/>
                        </span>
                            <label htmlFor="header-search"/>
                            <input id="header-search" placeholder="Search..."
                                   className={`bg-gray-200 border-none focus:outline-none ${menuOpen ? "visible w-full" : "invisible w-0"}`}/>
                        </div>
                    </div>
                    <span className={"block h-1 mb-6 bg-gray-200 w-full"}></span>
                    {navigations.map((navigation) => (
                        <Link href={navigation.path} key={navigation.page}
                              className={`flex items-center h-10 ${isPageActive(navigation.path) ? "text-white bg-blue-700 duration-200" : "hover:text-white hover:bg-blue-500 duration-200 "}`}>
                            <span className={`ml-3 mr-2`}>{navigation.icon}</span>
                            <p className={`leading-3 text-xs duration-100 ${menuOpen ? "visible w-auto" : "invisible w-0"}`}>{navigation.page}</p>
                        </Link>
                    ))}
                </div>
            </aside>
            <div className={`flex duration-300 flex-1 flex-col p-14 ${menuOpen ? "ml-[250px]" : "ml-[60px]"}`}>
                {children}
            </div>
        </>

    )
}


export default SideBar;