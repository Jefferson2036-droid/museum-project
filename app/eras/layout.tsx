import "@/app/globals.css";
import { SiteHeader } from "@/components/site/site-header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-mono antialiased text-black">
        <SiteHeader />
        <main className="pt-[100px]">{children}</main>
      </body>
    </html>
  );
}
