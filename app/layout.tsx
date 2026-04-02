import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Mari Campos | Nayá",
  description:
    "O caminho de volta pra mulher que você era antes de se perder no caminho dos outros. Mentoria de 8 semanas com Mari Campos.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mari Campos | Nayá",
    description:
      "Uma mentoria de autossustentação emocional. 8 semanas, em grupo, com encontros ao vivo, meditação guiada e ferramentas que funcionam.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
