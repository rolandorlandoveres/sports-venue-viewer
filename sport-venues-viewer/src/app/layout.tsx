import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josephine = Josefin_Sans({
  variable: "--font-josephine",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sports venue viewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josephine.variable} $antialiased`}
      >
        <div> Header </div> 
        {children}
      </body>
    </html>
  );
}
