import { Conversation } from "@/components/conversation";
import { Metadata } from "next";
import { title, description, url } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${title} - Share Problem`,
    description: "Share your problem and get a quick solution link.",
    openGraph: {
      title: `${title} - Share Problem`,
      description: "Share your problem and get a quick solution link.",
      url: `${url}/conversation`,
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

export default function ConversationPage() {
  return (
    <main className="flex flex-col gap-4 place-items-center p-4">
      <Conversation />
    </main>
  );
}
