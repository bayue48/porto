import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bayu Erich — Backend Engineer",
  description: "Portfolio and CV of Bayu Erich, Backend Engineer focused on APIs, databases, cloud deployment, and automation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: ["Bayu Erich", "mbayue", "portfolio", "nextjs", "typescript", "backend engineer", "go", "nodejs", "databases"],
  authors: [{ name: "Bayu Erich", url: "https://github.com/mbayue" }],
  openGraph: {
    title: "Bayu Erich — Backend Engineer",
    description: "Portfolio and CV of Bayu Erich, Backend Engineer focused on APIs, databases, cloud deployment, and automation.",
    url: "https://bayue.netlify.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Apply a saved preference before paint; only the root attribute changes. */}
        <script dangerouslySetInnerHTML={{ __html: `try { document.documentElement.dataset.theme = localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark"; } catch { document.documentElement.dataset.theme = "dark"; }` }} />
      </head>
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
