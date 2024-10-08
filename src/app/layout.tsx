import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import { Navbar } from "./Navbar";

import { Providers } from "./providers";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan Kim",
  description: "Evan Kim's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          <div className="flex flex-col min-h-screen items-center p-4 bg-zinc-100 dark:bg-zinc-800 pt-8">
            <div className="max-w-3xl w-full flex flex-col space-between items-center">
              <Navbar />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
