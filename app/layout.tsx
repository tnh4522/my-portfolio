import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const display = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trần Ngọc Huy — Information Technology Engineer & Full-Stack Developer",
  description:
    "Portfolio of Trần Ngọc Huy — Information Technology Engineer (DUT - PFIEV) & Full-Stack Developer with 2+ years of production experience in ERP, CRM, E-commerce, and Computer Networking.",
  openGraph: {
    title: "Trần Ngọc Huy — Information Technology Engineer & Full-Stack Developer",
    description:
      "Portfolio of Trần Ngọc Huy — Information Technology Engineer (DUT - PFIEV) & Full-Stack Developer with 2+ years of production experience in ERP, CRM, E-commerce, and Computer Networking.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Ngọc Huy — Information Technology Engineer & Full-Stack Developer",
    description:
      "Portfolio of Trần Ngọc Huy — Information Technology Engineer & Full-Stack Developer.",
  },
  metadataBase: new URL("https://huytran-4522.vercel.app"),
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-screen bg-bg-base text-text-primary font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
