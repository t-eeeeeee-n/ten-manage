"use client"

import React, {useState} from "react";

const Counter = ({children}: {children?: React.ReactNode}) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button className={"bg-black text-white font-bold p-2 rounded my-4"} onClick={() => setCount(count + 1)}>
                Increment counter
            </button>
            <p className={"text-gray-700"}>{count}</p>
            {children}
        </>
    )

}

export default Counter;