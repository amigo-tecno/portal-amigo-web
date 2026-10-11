import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Portal Amigo | Tecnologia, Educação e Inteligência Territorial",
  description: "Ecossistema de tecnologia aplicada: conheça a plataforma Prepára ENEM e as soluções de inteligência territorial do Amigo Geo.",
  keywords: ["Portal Amigo", "Prepára ENEM", "Amigo Geo", "simulados ENEM", "inteligência territorial", "CAR", "SIGEF", "agronegócio"],
  authors: [{ name: "Portal Amigo Tecnologia" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Portal Amigo | Inovação em Educação e Agronegócio",
    description: "Prepára ENEM e Amigo Geo: ecossistema inteligente de alta performance.",
    url: "https://portalamigo.com.br",
    siteName: "Portal Amigo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}