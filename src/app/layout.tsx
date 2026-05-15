import type { Metadata } from "next";
import { Raleway, Roboto_Slab, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OERTZENGroup - Executive Search - Professional Recruitment",
  description:
    "We are an Executive Search and Professional Recruitment firm serving European clients with an established footprint in North America as well as those looking to enter these markets.",
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32" },
      { url: "/seo/favicon-192.png", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "OERTZENGroup - Executive Search - Professional Recruitment",
    description:
      "We are an Executive Search and Professional Recruitment firm serving European clients with an established footprint in North America as well as those looking to enter these markets.",
    siteName: "OERTZENGroup",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${robotoSlab.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
