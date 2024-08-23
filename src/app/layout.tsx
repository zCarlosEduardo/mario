import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SM Encanadores",
  description: "Venha conhecer nossos serviços e planos para o seu encanamento!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Meta tag viewport */}
      </Head>
      <body className={jost.className}>{children}</body>
    </html>
  );
}