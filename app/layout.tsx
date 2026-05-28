import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const siteUrl = "https://medriox.com";
const title = "Medriox | Where Healing and Technology come together";
const description = title;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "HamidReza Rahimi" }],
  icons: {
    icon: "/img/favicon/favicon.svg",
  },
  manifest: "/img/favicon/manifest.json",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Medriox",
    locale: "en",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "msapplication-TileColor": "#26BCBC",
  },
};

export const viewport: Viewport = {
  themeColor: "#26BCBC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KLRF0DQPFP"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KLRF0DQPFP');
            `,
          }}
        />
      </body>
    </html>
  );
}
