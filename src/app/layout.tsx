import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-wemza",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Wemza - Money, Together",
  description: "Wemza makes it easier to send, receive, and manage money with the people around you. From everyday payments to shared expenses, trips, dinners, and business orders, Wemza keeps the money and the people involved in one place",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
