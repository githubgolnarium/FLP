import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/layout/Header";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                <link rel="stylesheet" href="/fonts/fontiran.css" />
                <link rel="stylesheet" href="/fonts/style.css" />
            </head>
            <body className="bg-slate-50" dir={locale === 'en' ? "ltr" : "rtl"}>
                <NextIntlClientProvider messages={messages}>
                    <Header locale={locale}></Header>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}