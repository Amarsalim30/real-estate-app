import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// app/layout.tsx
import { AuthProvider } from "@/app/context/authContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}