import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "~/components/header";
import { ApolloWrapper } from "~/lib/graphql/apollo-wrapper";

const sourceSans = Source_Sans_3({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const imageOg =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-73414.appspot.com/o/Og%20Image%2Fpokeverse.png?alt=media&token=f4622fc7-acd5-4a31-b7de-4d6efa6aff8c";
const description = "Your digital safari into the wild realms of Pokémon! 🌟";

export const metadata: Metadata = {
  title: "PokéVerse by Awil",
  description: description,
  alternates: {
    canonical: "/",
  },
  keywords: ["pokeverse", "pokedex", "pokemon"],
  openGraph: {
    type: "website",
    images: [
      {
        url: imageOg,
        width: 800,
        height: 600,
      },
      {
        url: imageOg,
        width: 1800,
        height: 1600,
        alt: "PokéVerse",
      },
    ],
    title: "PokéVerse",
    description: description,
  },
  twitter: {
    card: "summary_large_image",
    title: "PokéVerse by Awil",
    description: description,
    images: [imageOg],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.className} bg-background text-foreground min-h-svh `}
      >
        <ApolloWrapper>
          <Header />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}

