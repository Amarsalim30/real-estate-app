'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import { SessionProvider } from "next-auth/react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
