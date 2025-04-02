import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Provider";
import Footer from "@/components/Footer";

const options = {
  title: "Inah Eteng Okon | Professor of GIS and RS",
  description:
    "Emmanuel Elisha is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open-source communities",
  url: "https://emmanuelelisha.com", // ✅ Added missing URL
  ogImage:
    "https://res.cloudinary.com/victoreke/image/upload/v1692635746/victoreke/og.png",
};

// ✅ Fix: Rename `Metadata` to `metadata` and ensure `options.url` is defined
export const metadata = {
  title: options.title,
  metadataBase: new URL(options.url), // ✅ Now options.url is defined
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url, // ✅ Ensure URL is passed
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-zinc-900 bg-white dark:text-white text-zinc-700">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
