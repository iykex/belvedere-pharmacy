import { Metadata } from "next";

export const rootMetadata: Metadata = {
  title: "Belvedere Pharmacy",
  description:
    "We have all the drugs your doctor prescribed for your health and what’s more, we can get it to you.",
  keywords: [
    "Drug",
    "Pharmacy",
    "Health",
    "Medicine",
    "Prescription",
    "Belvedere",
    "Delivery",
    "Care",
    "Wellness",
    "Support",
    "Consultation",
  ],
  authors: [{ name: "Belvedere Pharmacy" }],
  creator: "Belvedere Pharmacy",
  publisher: "Belvedere Pharmacy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: " http://localhost:3000",
    siteName: "Belvedere Pharmacy",
    title: "Belvedere",
    description:
      "We have all the drugs your doctor prescribed for your health and what’s more, we can get it to you.",
    images: [
      {
        url: "http://localhost:3000/belvedere-logo.png",
        width: 1200,
        height: 630,
        alt: "Belvedere Pharmacy",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@belvedere_pharmacy",
    creator: "@belvedere_pharmacy",
    title: "Belvedere Pharmacy",
    description:
      "We have all the drugs your doctor prescribed for your health and what’s more, we can get it to you.",
    images: ["http://localhost:3000/belvedere-logo.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
    languages: {
      "en-US": "http://localhost:3000/en-US",
      "es-ES": "http://localhost:3000/es-ES",
    },
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicons/favicon-32x32.png",
    },
  },
  manifest: "/favicons/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Belvedere Pharmacy",
  },
  metadataBase: new URL("http://localhost:3000"),
};

export function getMetadata(
  title?: string,
  description?: string,
  path?: string,
  image?: string
): Metadata {
  return {
    ...rootMetadata,
    title,
    description,
    alternates: {
      canonical: `https://yoursite.com${path}`,
    },
    openGraph: {
      ...rootMetadata.openGraph,
      title,
      description,
      url: `https://yoursite.com${path}`,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : rootMetadata.openGraph?.images,
    },
    twitter: {
      ...rootMetadata.twitter,
      title,
      description,
      images: image ? [image] : rootMetadata.twitter?.images,
    },
  };
}
