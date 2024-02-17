import type { Metadata } from "next";
import {
  dmSerifDisplayFont,
  krylonFont,
  comforterFont,
  kantumruyFont,
  notoColorEmojiFont,
} from "./fonts";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Wedding Invitation | Aryan weds Komal | March 11th & 13th",
  // description: "Wedding invitation of Aryan & Komal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplayFont.variable} ${krylonFont.variable} ${comforterFont.variable} ${kantumruyFont.variable} ${notoColorEmojiFont.variable}`}
    >
      <body id="aryan-weds-komal" className="font-kantumruy">
        <div className="relative max-w-[450px] m-auto overflow-hidden w-full flex justify-center">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-QRMYSP4LG6" />
    </html>
  );
}
