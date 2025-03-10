import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "zandimt",
    description: "welcome to my personal portfolio!",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <link rel="icon" href="/favicon.ico"/>
        <body className="antialiased">{children}</body>
        </html>
    );
}
