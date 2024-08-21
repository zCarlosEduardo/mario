import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SM Encanadores",
  description: "Venha conhecer nossos seriços e planos para o seu encanamento!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
