import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QAVENTRIX | بازار آنلاین",
  description:
    "QAVENTRIX یک بازار آنلاین چندفروشندگی برای ارتباط خریداران، فروشندگان و کسب‌وکارها است.",
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
