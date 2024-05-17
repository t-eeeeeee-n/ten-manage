import { FaHome, FaLaptopCode, FaPenNib } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { TbUserQuestion } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { SiTestinglibrary } from "react-icons/si";
import { Navigation } from "@/components/sideBar/sideBar";

export const Navigations: Navigation[] = [
    {
        page: "Home",
        path: "/",
        icon: <FaHome className="size-6" />
    },
    {
        page: "Liked",
        path: "/liked",
        icon: <MdFavorite className="size-6" />
    },
    {
        page: "Diary",
        path: "/diary",
        icon: <FaPenNib className="size-6" />
    },
    {
        page: "Idea",
        path: "/idea",
        icon: <TbUserQuestion className="size-6" />
    },
    {
        page: "Code",
        path: "/code",
        icon: <FaLaptopCode className="size-6" />
    },
    {
        page: "Shadcn",
        path: "/shadcn",
        icon: <FaLaptopCode className="size-6" />
    },
    {
        page: "Setting",
        path: "/setting",
        icon: <IoMdSettings className="size-6" />
    },
    {
        page: "SSR-Test",
        path: "/test/ssr",
        icon: <SiTestinglibrary className="size-6" />
    }
];
