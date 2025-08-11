import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MediFlow - Modern Healthcare Management",
  description:
    "A modern healthcare patient management system designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-unique.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 font-sans antialiased relative overflow-x-hidden",
          fontSans.variable
        )}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)
          `
        }}
      >
        {/* Background Pattern */}
        <div 
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='medical-pattern' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%233b82f6' stroke-width='1'%3E%3Crect x='20' y='15' width='10' height='20'/%3E%3Crect x='15' y='20' width='20' height='10'/%3E%3C/g%3E%3Cg fill='none' stroke='%23a855f7' stroke-width='1'%3E%3Cpath d='M25 35 Q25 30 30 30 Q35 30 35 35 Q35 40 30 45 Q25 40 25 35 Z'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23medical-pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
        
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
