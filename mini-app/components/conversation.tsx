"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { url } from "@/lib/metadata";

export function Conversation() {
  const [problem, setProblem] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const [explanation, setExplanation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;
    const encoded = encodeURIComponent(problem.trim());
    const miniAppUrl = `${url}/miniapp?problem=${encoded}`;
    setLink(miniAppUrl);
    setExplanation(
      "This link will open a mini app that provides a quick explanation on how to address your problem."
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      <h2 className="text-xl font-semibold">Share Your Problem</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Textarea
          placeholder="Describe your problem..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="min-h-[120px]"
        />
        <Button type="submit">Generate Mini App Link</Button>
      </form>
      {link && (
        <div className="mt-4 p-4 border rounded-md bg-muted">
          <p className="font-medium">Mini App Link:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {link}
          </a>
          <p className="mt-2">{explanation}</p>
        </div>
      )}
    </div>
  );
}
