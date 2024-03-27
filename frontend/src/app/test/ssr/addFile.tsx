"use client"

import {useRef} from "react";
import {addImage} from "@/app/test/ssr/actions";

const AddFile = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const add = async (data: FormData) => {
        await addImage(data)
        if (formRef.current) formRef.current.reset();
    };
    return (
        <form className="flex items-center mt-4" action={add} ref={formRef}>
            <input type="file" name="image"
                   className="border mx-2 p-1 cursor-pointer
                    file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm
                    file:font-semibold file:bg-violet-50 file:text-violet-700 file:cursor-pointer
                    hover:file:bg-violet-10"/>
            <button
                type="submit"
                className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
            >
                Upload
            </button>
        </form>
    )
}
export default AddFile