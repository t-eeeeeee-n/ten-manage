import Counter from "@/app/test/counter/counter";

const MyServerComponent = () => {
    return(
        <p className={"text-gray-700"}>This component was rendered on the server.</p>
    )
}

const Page = () => {
    return(
        <section>
            <h1 className={"text-2xl font-semibold"}>My Page</h1>
            <Counter>
                <MyServerComponent />
            </Counter>
        </section>
    )
}
export default Page;