import Client from "./client";
import {apiAuthPrefix} from "@/route";
import {Session} from "next-auth";
import {auth} from "@/auth";

const getCsrfToken= async () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    try {
        const response = await fetch(`${apiUrl}${apiAuthPrefix}/csrf`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return null;
        }

        const data = await response.json();
        return data.csrfToken;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
        return null;
    }
}

const Page = async () => {
    const session: Session | null = await auth();
    const csrfToken = await getCsrfToken();

    return (
        <div className={"w-full min-h-dvh bg-gray-100"}>
            <Client csrfToken={csrfToken} />
        </div>
    )
}

export default Page;