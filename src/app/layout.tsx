import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Moradiya - Portfolio",
  description:
    "The portfolio of Akash Moradiya, a React.js developer with more than 2 years of experience.",
  openGraph: {
    images: ["https://akash-portfolio-2024.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="xqbQoq68oIz9cbsrLZP3hXQmLmG0QTIcxjb7qLEMb3Y"
        />
      </head>
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
