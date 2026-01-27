import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tou tube",
  description: "Better than you tube ;)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body
        className={`${roboto.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
