import type { Metadata } from "next";
import {
  dmSerifDisplayFont,
  krylonFont,
  comforterFont,
  kantumruyFont,
  notoColorEmojiFont,
} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan wed's Komal",
  description: "Wedding invitation",
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
    </html>
  );
}
