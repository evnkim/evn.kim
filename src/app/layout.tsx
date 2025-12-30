import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={`${ibmPlexSerif.className} bg-stone-100 dark:bg-stone-800`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
