import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { SiteHeader } from "../components/site/site-header"; // Corrected the import path
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "History of Artificial Intelligence",
  description:
    "A story-led site tracing AI from precursors to foundation models.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} font-mono max-w-[100vw] overflow-x-hidden`}
      >
        <SiteHeader /> {/* Ensure SiteHeader is rendered before {children} */}
        {children}
      </body>
    </html>
  );
}
