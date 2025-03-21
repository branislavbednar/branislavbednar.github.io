import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';

const poppins = Poppins({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Branislav Bednár - Portfolio",
  description: "Software developer portfolio of Branislav Bednár",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}