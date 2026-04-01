import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentoria Nayá — Mari Campos",
  description:
    "O caminho de volta pra mulher que você era antes de se perder no caminho dos outros. Mentoria de 8 semanas com Mari Campos.",
  openGraph: {
    title: "Mentoria Nayá — Mari Campos",
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
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
