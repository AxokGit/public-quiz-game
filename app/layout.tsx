import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Défi Quiz",
  description: "Teste tes connaissances et gagnes un prix incroyable !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
