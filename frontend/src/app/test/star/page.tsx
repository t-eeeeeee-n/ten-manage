import Client from "@/app/test/star/client";
import {Repo} from "@/app/types";

const getStaticProps = async (): Promise<Repo> => {
    // SSR
    // const res = await fetch("https://api.github.com/repos/vercel/next.js", {
    //     cache: "no-cache",
    // })
    // ISR
    const res = await fetch("https://api.github.com/repos/vercel/next.js", {
        next: { revalidate: 10 },
    })
    return res.json();
}

const Page = async () => {
    const repo: Repo = await getStaticProps()
    return <Client repo={repo} />
}

export default Page;