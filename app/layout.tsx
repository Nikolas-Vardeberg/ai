import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Provider";
import {Toaster} from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDFwhiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className={inter.className}>
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
              {children}
              </ThemeProvider>
            </body>
            <Toaster />
        </html>
      </Providers>
    </ClerkProvider>
  );
}
