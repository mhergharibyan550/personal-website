import type { Metadata } from "next";
import { Rampart_One, Recursive } from "next/font/google";

import Header from "../components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mher Gharibyan - Personal Website",
  description:
    "Personal website of Mher Gharibyan showcasing experience, skills, projects etc. ",
};

const rampartOneFont = Rampart_One({
  subsets: ["latin"],
  variable: "--font-rampart-one",
  weight: ["400"],
});

const recursiveFont = Recursive({
  subsets: ["latin"],
  variable: "--font-recursive",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${rampartOneFont.variable} ${recursiveFont.variable} font-recursive`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
