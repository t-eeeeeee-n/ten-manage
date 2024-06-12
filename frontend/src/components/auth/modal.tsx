import React from "react";
import Image from "next/image";

type ModalProps = {
    children: React.ReactNode;
}
const Modal = ({children}: ModalProps) => {
    return(
        <div className="md:w-96 w-full mx-auto md:h-auto h-full md:mt-32 mt-0 bg-white p-10 rounded-lg shadow-md">
            <div className={"flex flex-col justify-center items-center"}>
                <Image alt="logo" src="/common/ten-ten.svg" width={100} height={100} className={""}/>
                <span>ten-dev</span>
            </div>
            {children}
        </div>
    )
}
export default Modal