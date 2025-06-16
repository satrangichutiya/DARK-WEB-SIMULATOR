"use client";

import { DarkMarketplace } from "@/components/dark-marketplace";

export default function Home() {
  console.log("Direct marketplace access - no authentication required");

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage:
          "url('https://media.tenor.com/SFJ6LZs_SVwAAAAC/anime-dark.gif')",
      }}
    >
      <DarkMarketplace />
    </div>
  );
}
