import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideBar from "@/components/sideBar";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/themeProvider";

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
            <body className={cn(inter.className, "min-h-dvh")}>

                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header/>
                    <main className={"flex"}>
                        <SideBar>
                            {children}
                        </SideBar>
                    </main>
                    <footer className={"sticky top-full h-16 flex justify-end items-end px-4"}>&copy;ten</footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
