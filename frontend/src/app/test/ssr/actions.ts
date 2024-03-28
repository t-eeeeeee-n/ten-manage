'use server';

import {revalidatePath} from "next/cache";
import prisma from "@/lib/prisma";
import {writeFile} from "node:fs/promises";

export const doneTodo = async (id: number, isCompleted: boolean) => {
    await prisma.todo.update({
        where: {
            id: Number(id),
        },
        data: {
            isCompleted: !isCompleted,
        },
    });
    revalidatePath('/test/ssr');
}

export const addTodo = async (data: FormData) => {
    const name = data.get('name') as string;
    await prisma.todo.create({ data: { name } });
    revalidatePath('/test/ssr');
};

export const deleteTodo = async (data: FormData) => {
    const id = data.get('id') as string;
    await prisma.todo.delete({
        where: {
            id: Number(id),
        },
    });
    revalidatePath('/test/ssr');
};

export const doneTodo02 = async (id: number, isCompleted: boolean) => {
    await prisma.todo.update({
        where: {
            id: Number(id),
        },
        data: {
            isCompleted: !isCompleted,
        },
    });
    revalidatePath('/test/ssr');
}

export const addImage = async (data: FormData) => {

    const image = data.get('image') as File;

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filePath = `./public/ssrTest/${image.name}`;

    await writeFile(filePath, buffer);

    revalidatePath('/test/ssr');
};