import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400", // Archivo Black only ships one weight, it's already heavy
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webdevbyrau.com"),
  title: "Chris Rau — Software Engineer",
  description:
    "Product-minded engineer who designs, builds, and ships full-stack web and mobile applications.",
  openGraph: {
    title: "Chris Rau — Software Engineer",
    description:
      "Product-minded engineer who designs, builds, and ships full-stack web and mobile applications.",
    images: ["/og-image.png"],
    url: "https://webdevbyrau.com",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-pack/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-pack/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-pack/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/favicon-pack/favicon-180.png", sizes: "180x180" }],
  },
};

// Applies the persisted theme before first paint to avoid a flash of the
// wrong theme. Default (mono) leaves the attribute unset.
const themeInitScript = `(function(){try{if(localStorage.getItem('theme')==='rust'){document.documentElement.setAttribute('data-theme','rust');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivoBlack.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
