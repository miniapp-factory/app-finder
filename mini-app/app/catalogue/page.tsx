import { Catalogue } from "@/components/catalogue";
import { Metadata } from "next";
import { title, url } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${title} - Catalogue`,
    description: "Browse all available mini apps and learn what they do.",
    openGraph: {
      title: `${title} - Catalogue`,
      description: "Browse all available mini apps and learn what they do.",
      url: `${url}/catalogue`,
      images: [
        {
          url: `${url}/icon.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function CataloguePage() {
  return (
    <main className="flex flex-col gap-4 place-items-center p-4">
      <Catalogue />
    </main>
  );
}
