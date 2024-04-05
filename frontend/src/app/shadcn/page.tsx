import Link from "next/link";
import {Button} from "@/components/ui/button";

const Page = () => {
    const navigations = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Contact",
            href: "/contact"
        }
    ]
    return (
        <div>
            <ul className={"flex gap-3"}>
                {navigations.map((item) => (
                    <li key={item.title}>
                        <Button variant={"outline"} asChild>
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Page;