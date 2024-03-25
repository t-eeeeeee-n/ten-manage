import Image from "next/image";
import HeaderButton from "@/components/HeaderButton";
import SnsLink from "@/components/SnsLink";

const Header = () => {
    return(
        <header className={"flex sticky top-0 bg-white backdrop-blur-sm z-50 items-center h-16 gap-2 px-4"}>
            <h1 className={"font-bold text-xl leading-tight"}>
                <a className={"inline-flex items-center"}>
                    <Image alt="logo" src="/icon.svg" width={30} height={100}
                           className={"bg-gray-100 border border-black rounded-md mr-2"}/>
                    <span className={"font-semibold text-lg mr-1"}>ten</span>
                    <SnsLink />
                </a>
            </h1>
            <div className={"flex items-center gap-2 ml-auto"}>
                <HeaderButton text={"ログイン"}
                              className={"text-black bg-white border border-gray-400  hover:bg-gray-200"}/>
                <HeaderButton text={"新規登録"}
                              className={"text-white bg-black border-none border-black  hover:opacity-70"}/>
            </div>
        </header>
    )
}

export default Header