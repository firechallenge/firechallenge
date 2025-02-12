import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fire Challenge",
  description: "Challenges to learn anything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-3`}
      >
        <header className="flex justify-between bg-zinc-800 py-2 px-4 rounded-xl">
          <div className="flex flex-row items-center gap-4">
            <span className="w-[30px] h-[45px] flex items-center justify-center">
              <Image src="/logo4.svg" alt="Logo" width={30} height={45} />
            </span>
            <h1 className="text-2xl font-bold">Fire Challenge</h1>
          </div>
          <nav></nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
