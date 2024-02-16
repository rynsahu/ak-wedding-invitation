import { DM_Serif_Display, Comforter, Kantumruy_Pro, Noto_Color_Emoji } from "next/font/google";
import localFont from "next/font/local";

export const dmSerifDisplayFont = DM_Serif_Display({ 
  subsets: ["latin"], 
  weight: ['400'],
  variable: "--font-dm-serif-display"
});

export const comforterFont = Comforter({ 
  subsets: ["latin"], 
  weight: ['400'],
  variable: "--font-comforter"
});

export const kantumruyFont = Kantumruy_Pro({ 
  subsets: ["latin"], 
  variable: "--font-kantumruy"
});

export const notoColorEmojiFont = Noto_Color_Emoji({ 
  subsets: ["emoji"], 
  weight: ['400'],
  variable: "--font-noto-color-emoji"
});

export const krylonFont = localFont({
  src: [{
    path: "../assets/fonts/Krylon-Regular.woff",
  }],
  variable: "--font-krylon"
});
