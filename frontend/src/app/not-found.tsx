import Error from "@/components/error";
import type { Metadata } from 'next'

export const metadata:Metadata = {
    title: '404'
}

const NotFound = () => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <Error errorCode={404} title={"Not found"} message={"Sorry, we couldn't find that page."} />
        </div>
    )
}

export default NotFound