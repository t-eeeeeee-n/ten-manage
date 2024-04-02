"use client"

import DoneTodo from "@/app/test/ssr/doneTodo";
import DoneTodo02 from "@/app/test/ssr/doneTodo02";
import {deleteTodo, doneTodo02} from "@/app/test/ssr/actions";
import AddTodo from "@/app/test/ssr/addTodo";
import AddFile from "@/app/test/ssr/addFile";
import Link from "next/link";
import {Todos} from "@/app/test/ssr/page";

type ClientProps = {
    todos: Todos[]
}

const Client = ({todos}: ClientProps) => {
    return (
        <div className={"flex flex-col"}>
            <div className={"m-8"}>
                <h1 className={"text-4xl font-bold mb-2"}>SSR-Test</h1>
                <h2 className={"text-xl"}>
                    <span>- reference</span>
                    <button className={"bg-blue-600 px-2 py-1 ml-2 rounded-lg text-sm text-white hover:opacity-70"}>
                        <Link href={"https://reffect.co.jp/react/next-j-server-actions"}
                              className={""}>Link</Link>
                    </button>
                </h2>
            </div>
            <span className={"block w-full h-0.5 bg-black"}></span>
            <div className="m-8">
                <h2 className="text-xl font-bold">use strartTransition</h2>
                <h3 className="text-lg font-bold">Todo一覧</h3>
                <ul className="mt-8">
                    {todos.map((todo: Todos) => (
                        <li
                            key={todo.id}
                            className={`flex items-center space-x-2 mb-2 ${
                                todo.isCompleted ? 'line-through' : ''
                            }`}
                        >
                            <DoneTodo id={todo.id} isCompleted={todo.isCompleted}/>
                            <span className={"w-28"}>{todo.name}</span>
                            <form className={"w-14"}>
                                <input type="hidden" name="id" value={todo.id} />
                                <button
                                    className="bg-red-500 px-2 py-1 rounded-lg text-sm text-white"
                                    formAction={deleteTodo}
                                >
                                    削除
                                </button>
                            </form>
                        </li>
                    ))}
                </ul>
                <AddTodo/>
            </div>
            <span className={"block w-full h-0.5 bg-black"}></span>
            <div className="m-8">
                <h2 className="text-xl font-bold">not use strartTransition</h2>
                <h3 className="text-lg font-bold">Todo一覧</h3>
                <ul className="mt-8">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex items-center space-x-2 mb-2 ${
                                todo.isCompleted ? 'line-through' : ''
                            }`}
                        >
                            <DoneTodo02 id={todo.id} isCompleted={todo.isCompleted} doneTodo={doneTodo02}/>
                            <span className={"w-28"}>{todo.name}</span>
                            <form className={"w-14"}>
                                <input type="hidden" value={todo.id}/>
                                <button
                                    className="bg-red-500 px-2 py-1 rounded-lg text-sm text-white"
                                    formAction={deleteTodo}
                                >
                                    削除
                                </button>
                            </form>
                        </li>
                    ))}
                </ul>
                <AddTodo/>
            </div>
            <span className={"block w-full h-0.5 bg-black"}></span>
            <div className="m-8">
                <h2 className="text-xl font-bold">upload Image</h2>
                <AddFile/>
            </div>

        </div>
    );
}
export default Client;
