import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider, ThemeProvider } from "@/providers";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grotesque",
});

const title = "Akash Moradiya | React.js/Next.js Developer";
const description =
  "Akash Moradiya is a skilled React.js and Next.js developer with over 2 years of experience in building dynamic and responsive web applications. Explore my portfolio to see my work and projects.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "Akash Moradiya, React.js developer, Next.js developer, React developer, Next developer, web developer, front-end developer, JavaScript developer, portfolio, web applications, dynamic web apps, responsive web design",
  authors: [
    {
      name: "Akash Moradiya",
    },
  ],
  openGraph: {
    images: ["https://www.akashmoradiya.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@akash_3444",
    creator: "@akash_3444",
    title,
    description,
  },
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
    {
      sizes: "16x16",
      type: "image/png",
      url: "/favicon-16x16.png",
    },
    {
      sizes: "32x32",
      type: "image/png",
      url: "/favicon-32x32.png",
    },
    {
      sizes: "192x192",
      type: "image/png",
      url: "/android-chrome-192x192.png",
    },
    {
      sizes: "512x512",
      type: "image/png",
      url: "/android-chrome-512x512.png",
    },
    {
      sizes: "180x180",
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#ef4444",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="xqbQoq68oIz9cbsrLZP3hXQmLmG0QTIcxjb7qLEMb3Y"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <CSPostHogProvider>
        <body className={bricolageGrotesque.className}>
          <ThemeProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
