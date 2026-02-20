import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best website design services in Nashik ,Pune | Dhiraj Portfolio",
  description: "Dhiraj Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f6f2] antialiased`}
      >
        <SmoothScroll>
          {/* <Providers> */}
          {/* <ClientEffects /> */}
          {children}
          {/* </Providers> */}
        </SmoothScroll>
      </body>
    </html>
  );
}
