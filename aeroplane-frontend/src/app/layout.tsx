import type { Metadata } from "next";
import RQProvider from "@/lib/react-query";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greenn Planne",
  description: "Airline demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}`}>
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}

