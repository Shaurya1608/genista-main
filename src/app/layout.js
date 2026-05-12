import { Inter, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Genista Inn | Luxury Hotel & Resort",
  description: "Experience world-class hospitality and luxury at Genista Inn. Discover our premium rooms, fine dining, and exceptional services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col selection:bg-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
