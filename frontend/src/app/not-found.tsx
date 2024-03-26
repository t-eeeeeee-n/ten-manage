import Image from "next/image";
import Error from "@/components/Error";

const NotFound = () => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <Error errorCode={404} title={"Not found"} message={"Sorry, we couldn't find that page."} />
        </div>
    )
}

export default NotFound