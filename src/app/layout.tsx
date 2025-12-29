import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

const rubik = Rubik({ subsets: ["latin"] });

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
      <body className={`${rubik.className} bg-stone-100 dark:bg-stone-800`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
