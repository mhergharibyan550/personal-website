import { Metadata } from "next";

export function constructMetadata({
  title = "Mher Gharibyan - Personal Website",
  description = "Personal website of Mher Gharibyan showcasing experience, skills, projects etc. ",
  image = "/opengraph-image.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    metadataBase: new URL("https://mhergharibyan.vercel.app/"),
  };
}
