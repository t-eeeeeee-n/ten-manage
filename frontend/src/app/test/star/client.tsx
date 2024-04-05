"use client"

import {Repo} from "@/app/types";

type ClientProps = {
    repo: Repo;
}

const Client = ({repo}: ClientProps) => {
    return (
        <section>
            <h1 className={"text-2xl font-semibold"}>{repo.name}</h1>
            <p className={"text-gray-700 mt-4"}>{repo.stargazers_count}</p>
        </section>
    )
}

export default Client;