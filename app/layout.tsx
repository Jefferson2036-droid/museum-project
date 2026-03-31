import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SiteHeader } from "../components/site/site-header"; // Corrected the import path

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
      <body>
        <SiteHeader /> {/* Ensure SiteHeader is rendered before {children} */}
        {children}
      </body>
    </html>
  );
}
