import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./Components/Headerpage/Headerpage.css";

import Headerpage from "./Components/Headerpage/Headerpage";
import Footerpage from "./Components/Footerpage/Footerpage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKY FINANCE",
  description: "Financial support partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Headerpage/> */}
        {children}
        <Footerpage />
      </body>
    </html>
  );
}
