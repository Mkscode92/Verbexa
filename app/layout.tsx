import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

//a special component that lets you add a particular component to every route, 
// like a navbar 

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verbexa",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{variables: {colorPrimary: '#fe5933'}}}>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html> //children - simply what every page shows for that page 
  );
}
