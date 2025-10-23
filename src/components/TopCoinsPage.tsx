"use client";

import { useEffect, useState } from "react";
import CoinTable from "@/components/CoinTable";

export default function TopCoinsPage({
  initialCoins,
}: {
  initialCoins: any[];
}) {
  const [coins, setCoins] = useState(initialCoins);

  const fetchCoins = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/coins`);

      if (!res.ok) throw new Error("Failed to fetch");

      const coinsData = await res.json();
      setCoins(coinsData);
    } catch (err) {
      console.error("Failed to fetch coins:", err);
      setCoins([]); // return empty array on failure
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchCoins, 60 * 1000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6">
      <CoinTable coins={coins} />
    </main>
  );
}
