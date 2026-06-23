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
  title: "Tran Ngoc Huy — Web Designer & Frontend Developer",
  description:
    "Portfolio of Tran Ngoc Huy — Web Designer & Frontend Developer at Lundi Matin Groupe (France). Building interfaces that work, from Da Nang to the French cloud.",
  openGraph: {
    title: "Tran Ngoc Huy — Web Designer & Frontend Developer",
    description:
      "Portfolio of Tran Ngoc Huy — Web Designer & Frontend Developer at Lundi Matin Groupe (France). Building interfaces that work, from Da Nang to the French cloud.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Ngoc Huy — Web Designer & Frontend Developer",
    description:
      "Portfolio of Tran Ngoc Huy — Web Designer & Frontend Developer at Lundi Matin Groupe (France).",
  },
  metadataBase: new URL("https://tranngochy.dev"),
  icons: { icon: "/favicon.ico" },
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
      <body className="min-h-screen bg-bg-base text-text-primary font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
