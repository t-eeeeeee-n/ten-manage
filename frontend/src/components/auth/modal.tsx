import React from "react";
import Image from "next/image";

type ModalProps = {
    children: React.ReactNode;
}
const Modal = ({children}: ModalProps) => {
    return(
        <div className="w-96 mx-auto mt-32 bg-white p-10 rounded-lg shadow-md">
            <div className={"flex flex-col justify-center items-center"}>
                <Image alt="logo" src="/common/ten-ten.svg" width={100} height={100} className={""}/>
                <span>ten-dev</span>
            </div>
            {children}
        </div>
    )
}
export default Modal