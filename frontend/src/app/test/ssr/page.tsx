"use server"

import prisma from '@/lib/prisma';
import Client from "@/app/test/ssr/client";
import {Todos} from "@/app/types";

const getData = async (): Promise<Todos[]> => {
    return await prisma.todo.findMany()
}

const Page = async () => {

    const todos: Todos[] = await getData();
    const sortedTodos: Todos[] = todos.sort((a, b) => a.id - b.id);

    return <Client todos={sortedTodos}/>
}
export default Page;
