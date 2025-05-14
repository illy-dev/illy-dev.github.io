
import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/navbar/main';

export const metadata: Metadata = {
  title: "illy",
  description: "website by illy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
