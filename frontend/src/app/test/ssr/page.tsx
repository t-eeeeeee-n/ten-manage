"use server"

import prisma from '@/lib/prisma';
import Client from "@/app/test/ssr/client";

export type Todos = {
    id: number;
    name: string;
    isCompleted: boolean;
}

const getData = async (): Promise<Todos[]> => {
    return await prisma.todo.findMany()
}

const Page = async () => {

    const todos: Todos[] = await getData();

    return <Client todos={todos}/>
}
export default Page;
