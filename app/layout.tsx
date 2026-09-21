import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POLARIS · Antarctic Digital Twin",
  description: "Antarctic station operations, interactive 3D digital twins, and environmental scenario planning.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
