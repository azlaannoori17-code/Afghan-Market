import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "افغان مارکت | بازار آنلاین افغانستان",
  description: "بازار آنلاین افغانستان؛ خرید و فروش در سراسر کشور",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
