import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevFest Lauro de Freitas",
  description: "DevFest Lauro de Freitas — GDG Lauro de Freitas.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        {/* Aplica a preferência de dark mode da home 2026 antes do
            primeiro paint, pra não piscar claro->escuro no reload.
            Conteúdo estático (sem input de usuário) — seguro usar
            dangerouslySetInnerHTML aqui. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('devfest-2026-theme')==='dark'){document.documentElement.classList.add('theme-2026-dark')}}catch(e){}`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
