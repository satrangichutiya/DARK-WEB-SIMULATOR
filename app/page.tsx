"use client";

import { DarkMarketplace } from '@/components/dark-marketplace';

export default function Home() {
  console.log("Direct marketplace access - no authentication required");

  return (
    <div className="min-h-screen">
      <DarkMarketplace />
    </div>
  );
}
