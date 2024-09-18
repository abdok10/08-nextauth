import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@components/Navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Navigation />
          <div className="pt-32">{children}</div>
        </div>
      </body>
    </html>
  );
}
