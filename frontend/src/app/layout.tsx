import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ten",
    description: "ten manage site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <Header/>
                <main className={"flex"}>
                    <SideBar/>
                    <div className={"flex flex-1 flex-col p-14 bg-white"}>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
