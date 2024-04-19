import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "~/components/header";
import { ApolloWrapper } from "~/lib/graphql/apollo-wrapper";

const sourceSans = Source_Sans_3({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokéVerse",
  description: "Your digital safari into the wild realms of Pokémon! 🌟",
  keywords: ["pokeverse", "pokedex", "pokemon"],
  openGraph: {
    type: "website",
    images: "/logo.png",
    title: "PokéVerse",
    description: "Your digital safari into the wild realms of Pokémon! 🌟",
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

