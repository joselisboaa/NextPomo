import "./globals.css";
import React from "react";
import { Roboto_Flex } from "next/font/google";
import Header from "@/components/Header";

interface IBaseLayout {
  children: React.ReactNode;
}

const roboto = Roboto_Flex({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

export const metadata = {
  title: "PomoHealth",
  description: "Sistema de Pomodoro Timer para a sua saúde",
};

export default function Layout({ children }: IBaseLayout) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body className="flex h-screen w-screen flex-col overflow-x-hidden">
        <Header />
        <div className="grow bg-tertiary">{children}</div>
      </body>
    </html>
  );
}
