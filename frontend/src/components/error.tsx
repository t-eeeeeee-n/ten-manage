import Image from "next/image";

interface ErrorProps {
    errorCode: number;
    title: string;
    message: string;
}
const Error = ({errorCode, title, message}: ErrorProps) => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <div className={"flex"}>
                {[...Array(5)].map((_, index) => (
                    <Image key={index} alt="not-found" src="/not-found.svg" width={150} height={150}/>
                ))}
            </div>
            <h1 className={"text-9xl font-bold"}>
                <span className={"block w-fit italic"}>{errorCode.toString()}</span>
                <span className={"block h-1 w-full mt-[-15px] rounded-2xl bg-black blur"}></span>
            </h1>
            <h2 className={"mt-10 text-2xl font-bold"}>{title}</h2>
            <h3 className={"mt-5 text-sm"}>{message}</h3>
            <div className={"flex"}>
                {[...Array(5)].map((_, index) => (
                    <Image key={index} alt="not-found" src="/not-found.svg" width={150} height={150}/>
                ))}
            </div>
        </div>
    )
}

export default Error