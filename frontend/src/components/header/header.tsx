import Image from "next/image";
import Button from "@/components/header/button";
import SnsLink from "@/components/snsLink";
import {ModeToggle} from "@/components/modalToggle";

const Header = () => {
    return(
        <header className={"flex sticky top-0 backdrop-blur-sm z-50 items-center h-16 gap-2 px-4 bg-white dark:bg-black"}>
            <h1 className={"font-bold text-xl leading-tight"}>
                <a className={"inline-flex items-center"}>
                    <Image alt="logo" src="/icon.svg" width={30} height={100}
                           className={"bg-white border border-black rounded-md mr-2"}/>
                    <span className={"font-semibold text-lg mr-1"}>ten</span>
                    <SnsLink />
                </a>
            </h1>
            <div className={"flex items-center gap-2 ml-auto"}>
                <ModeToggle/>
                <Button text={"ログイン"}
                        className={"text-black bg-white dark:text-white dark:bg-black border border-gray-400 hover:bg-gray-200"}/>
                <Button text={"新規登録"}
                        className={"text-white bg-black dark:text-black dark:bg-white border-none border-black hover:opacity-70"}/>
            </div>
        </header>
    )
}

export default Header