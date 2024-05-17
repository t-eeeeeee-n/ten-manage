import Client from "./client_bak";
import SignIn from "./client";
import {apiAuthPrefix} from "@/route";

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
    const csrfToken = await getCsrfToken();

    return (
        <div>
            <Client />
            <SignIn csrfToken={csrfToken} />
        </div>
    )
}

export default Page;