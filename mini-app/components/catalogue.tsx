"use client";

import { useEffect, useState } from "react";
import { fetchDiscovery } from "@/lib/api";

interface MiniAppInfo {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  url: string;
}

export function Catalogue() {
  const [apps, setApps] = useState<MiniAppInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchDiscovery();
        setApps(data.apps ?? []);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return <p>Loading catalogue…</p>;
  }

  if (error) {
    return <p className="text-destructive">Error: {error}</p>;
  }

  if (apps.length === 0) {
    return <p>No mini apps found.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {apps.map((app) => (
        <div
          key={app.id}
          className="border rounded-md p-4 flex flex-col gap-2 hover:shadow-md transition-shadow"
        >
          <img
            src={app.iconUrl}
            alt={`${app.title} icon`}
            className="w-12 h-12 self-center"
          />
          <h3 className="font-semibold text-lg">{app.title}</h3>
          <p className="text-sm text-muted-foreground">{app.description}</p>
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-600 underline"
          >
            Open Mini App
          </a>
        </div>
      ))}
    </div>
  );
}
