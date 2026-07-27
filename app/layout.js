import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Technochy — AI Agency & Creative Studio",
  description: "High performance AI agency landing page with rich animations, pixel grid system, interactive services, and showcase portfolio.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.svg"],
    apple: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sansFont.variable} ${monoFont.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#f3f3f3] text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
