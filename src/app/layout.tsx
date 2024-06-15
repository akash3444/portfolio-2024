import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

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
