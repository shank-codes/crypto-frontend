"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CoinChart({ coin, onBack }: any) {
  const [data, setData] = useState([]);

  const run = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/coins/${coin.id}`
    );
    const priceHistory = await res.json();

    const formatted = priceHistory.map(
      ({ date, price }: { date: string; price: number }) => ({
        date: new Date(date).toLocaleDateString(),
        price,
      })
    );
    setData(formatted);
  };

  useEffect(() => {
    run();
  }, [coin]);

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-semibold">{coin.name} Price Chart</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
