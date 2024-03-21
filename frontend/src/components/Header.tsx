import Image from "next/image";

const Header = () => {
    return(
        <header className="flex sticky top-0 bg-emerald-500 backdrop-blur-sm z-50 items-center h-16 gap-2 px-4">
            <h1 className="font-bold text-xl leading-tight">
                <a className="inline-flex items-center">
                    <Image alt="logo" src="/ten-ten.svg" width={30} height={100} className="bg-gray-100 border border-black rounded-md mr-2" />
                    <span className="font-semibold text-lg">ten</span>
                </a>
            </h1>
        </header>
    )
}

export default Header