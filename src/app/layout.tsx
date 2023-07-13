import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "max.",
  description: "Welcome to my website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang="en">
      <head>
        <title>max.</title>
        <link rel="icon" href="/images/logo-dm.png" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
