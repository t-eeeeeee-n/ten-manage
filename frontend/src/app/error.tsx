"use client"
import Error from "@/components/Error";

const ErrorPage = () => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <Error errorCode={500} title={"Internal server error"} message={"Sorry, It's not you, It's us."} />
        </div>
    )
}
export default ErrorPage