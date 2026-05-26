import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "JustDarkness",
  description: "clawx has a great taste in music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}