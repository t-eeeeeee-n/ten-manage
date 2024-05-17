import type {GetServerSideProps, Metadata} from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideBar from "@/components/sideBar";
import {cn} from "@/lib/utils";
import ThemeProvider from "@/components/header/themeProvider";
import {FaHome, FaLaptopCode, FaPenNib} from "react-icons/fa";
import {MdFavorite} from "react-icons/md";
import {TbUserQuestion} from "react-icons/tb";
import {IoMdSettings} from "react-icons/io";
import {SiTestinglibrary} from "react-icons/si";
import React, {PropsWithChildren} from "react";
import {Navigation} from "@/components/sideBar/sideBar";
import NextAuthProvider from "@/providers/NextAuth";
import { SessionProvider } from 'next-auth/react';
import {auth} from "@/auth";
import {Session} from "next-auth";
import {Navigations} from "@/constants/navigations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ten",
    description: "ten manage site"
};

export default async function RootLayout({ children }: PropsWithChildren) {
    const session: Session | null = await auth();
    return (
        <html lang="ja" suppressHydrationWarning>
            <body className={cn(inter.className, "min-h-dvh")}>
                <SessionProvider session={session}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Header/>
                        <main className={"flex"}>
                            <SideBar navigations={Navigations} session={session}>
                                {children}
                            </SideBar>
                        </main>
                        <footer className={"sticky top-full h-16 flex justify-end items-end px-4"}>&copy;ten</footer>
                    </ThemeProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
